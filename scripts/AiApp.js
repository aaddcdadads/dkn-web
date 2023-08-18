const { exec,execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const Handlebars = require('../lib/handlebars');
const { func } = require('vue-types');
const xml2js = require('xml2js');


function AiApp() {}

/**
 * 创建应用
 * @param {*} config 
 */
AiApp.prototype.createProjet = function(config) {
    console.log(`-- 开始创建应用:${config.appData.projectName}`)
    if(config.version !== "1.0"){
        console.log(`只有version=1.0才会进行项目初始化`);
        return;
    }
    //更新version
    config.version = "1.1";

    //处理应用代码、脚本存储目录
    config.workdir = handleAppDir(config);

    //初始化数据库
    initDataBase(config);

    //应用前端代码仓库初始化
    initAppWebRepo(config);

    //应用后端端代码仓库初始化
    initBackendRepo(config);

    //重新写入init.json文件
    rewriteInitJson(config);

    console.log(`==> 应用:${config.appData.projectName}创建完成！`)

}

/**
 * 初始化数据库
 * @param {*} config 
 */
function initDataBase(config) {
    console.log("==> 初始化数据库");
    //生成初始化数据库脚本文件
    let output = genDbInitShFile(config);
    console.log(`数据库初始化脚本：${output}`)

    //执行db初始脚本文件
    try {
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`数据库初始化脚本执行报错：`, e);
    }
}


/**
 * 生成创数据库初始化脚本文件
 * @param {*} config 
 * @returns 
 */
function genDbInitShFile(config){
    let renderData = {
        dbHost: config.appData.dbConfig.dbHost,
        dbAdmin: config.appData.dbConfig.dbAdmin,
        dbAdmingPassword: config.appData.dbConfig.dbAdmingPassword,
        dbName: config.appData.dbConfig.dbName,
        microDbNames: config.appData.dbConfig.microDbNames.join(','),
        sqlPath: config.appData.dbConfig.sqlPath
      };
  
    let template = fs.readFileSync(`./templates/init_mult_db.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //创建新的db初始脚本文件
    let output = path.join(config.workdir,`/init_mult_db.sh`);
    fs.writeFileSync(output, templateContent);

    return output;
}


/**
 * 应用后端端代码仓库初始化
 * @param {*} config 
 */
function initBackendRepo(config){
    console.log(`==> 开始初始化应用后端仓库`)
    //生成jeecgboot后端init.sh
    config.initJeecgShPath = genJeecgBackendInitSh(config);
    //生成应用后端代码仓库初始化脚本 app_backend_repo.sh
    let output = genAppBackendRepoSh(config);
    //执行脚本文件
    try {
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`合并微应用代码仓库脚本执行报错：`, e);
        console.error(`==> 请手动进行微应用代码仓库合并，然后手动执行发布！`);
        return;
    }

    //处理多数据源
    handleMultDatasource(config);

    //处理后端pom文件
    handleAppBackendRepo(config);

    //代码提交
    commitRepo(config);
}

/**
 * 提交代码
 */
function commitRepo(config){
    console.log(`==> 代码提交`)
    //生成脚本  commit.sh
    let output = genCommitSh(config);
    //执行脚本
    try {
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`代码提交脚本执行报错：`, e);
    }
}

/**
 * 生成代码提交脚本
 * @param {*} config 
 */
function genCommitSh(config) {
    let renderData = {
        workdir:path.join(config.workdir,`/${config.appData.gitLab.backendRepoName}`),
        desc:"init repo"
      };
  
    let template = fs.readFileSync(`./templates/commit.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/commit.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成代码提交脚本:${output}`)
    return output;
}

/**
 * @todo
 * 处理多数据源
 * 
 * 从库名称=主库名称_微应用数据库名称
 * 
 * @param {*} config 
 */
function handleMultDatasource(config) {

}

/**
 * 处理后端pom文件并发布后端
 * @param {*} config 
 */
function handleAppBackendRepo(config){
    console.log(`==> pom.xml文件处理中`)
    //处理pom文件
    handleAppPom(config);
    //生成后端发布脚本  app_backend_deploy.hbs
    let output = genBackendDeploySh(config);
    //执行脚本发布脚本部署后端
    try {
        console.log(`==> 开始部署应用后端服务`)
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`应用后端部署脚本执行报错：`, e);
        console.error(`==> 请手动部署应用后端！`);
    }
}

/**
 * 处理pom文件
 * @param {*} config 
 */
function handleAppPom(config) {
    //上一步合并微应用代码的脚本中，已经将所有微应用的父项目pom.xml文件都拷贝在 config.workdir/pom 文件夹中，并以 "微应用仓库名称.xml" 命名pom文件
    //读取所有微应用pom文件<modules>标签
    let modules = parsePomDom(config);

    //重写应用仓库pom.xml中的<modules>
    rewriteParentPom(modules,config);

    //将module依赖写入应用仓库 system模块的pom.xml
    rewriteSystemPom(modules,config);
}


/**
 * 重写应用仓库system模块的pom.xml
 * @param {*} modules 
 * @param {*} config 
 */
function rewriteSystemPom(modules,config){
    let file = path.join(config.workdir,`/${config.appData.gitLab.appBackendRepoName}/jeecg-boot/jeecg-boot-module-system/pom.xml`)
    // 读取 XML 文件内容
    const xmlData = fs.readFileSync(file, 'utf8');

    // 创建解析器对象
    const parser = new xml2js.Parser();

    //不需要再次引入的模块
    let ignoreModules = ["jeecg-boot-base","jeecg-boot-module-demo","haomo-module-restify","haomo-codegen","jeecg-boot-module-system"]

    // 使用解析器解析 XML 字符串
    parser.parseString(xmlData, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        // 修改相关标签信息
        for(let i = 0; i < modules.length; i++) {
            let module = modules[i];
            if(ignoreModules.indexOf(module) != -1){
                continue;
            }
            result.project.dependencies[0].dependency.push({
                "groupId":"org.jeecg",
                "artifactId":module,
                "version":"${jeecgboot.version}"
            });
        }
        // 创建新的 XML Builder 对象
        const builder = new xml2js.Builder();

        // 将解析后的结果重新转换为 XML 字符串
        const newXmlData = builder.buildObject(result);

        // 将 XML 字符串保存为新的 XML 文件
        fs.writeFileSync(file, newXmlData);
        console.log(`${file} 写入成功`)

    })
}

/**
 * 重写应用仓库pom.xml中的<modules>
 * @param {*} modules 
 * @param {*} config 
 */
function rewriteParentPom(modules,config){
    let file = path.join(config.workdir,`/${config.appData.gitLab.appBackendRepoName}/jeecg-boot/pom.xml`)
    // 读取 XML 文件内容
    const xmlData = fs.readFileSync(file, 'utf8');

    // 创建解析器对象
    const parser = new xml2js.Parser();

    // 使用解析器解析 XML 字符串
    parser.parseString(xmlData, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`modules-->`)
        console.log(modules)
        // 修改相关标签信息
        result.project.modules[0].module = modules;

        // 创建新的 XML Builder 对象
        const builder = new xml2js.Builder();

        // 将解析后的结果重新转换为 XML 字符串
        const newXmlData = builder.buildObject(result);

        // 将 XML 字符串保存为新的 XML 文件
        fs.writeFileSync(file, newXmlData);
        console.log(`${file} 写入成功`)

    })
}

/**
 * 读取所有微应用pom文件<modules>标签
 * @param {*} config 
 */
function parsePomDom(config) {
    //微应用仓库名称
    let repoNames = config.appData.gitLab.microBackendRepoNames;
    if(!repoNames || repoNames.length==0){
        return null;
    }

    //提取所有module
    let moduleArr = [];
    repoNames.forEach(e=>{
        let file = path.join(config.workdir,`/pom/${e}.xml`);
        let xmlString = fs.readFileSync(file, 'utf8');

        // 创建解析器对象
        const parser = new xml2js.Parser();
        // 使用解析器解析 XML 字符串
        parser.parseString(xmlString, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            // 读取相关标签信息
            const modules = result.project.modules[0].module;
            modules.forEach(item=>{
                if(moduleArr.indexOf(item) == -1){
                    moduleArr.push(item);
                }
            })
        });
    })

    return moduleArr;
}

/**
 * 生成后端发布脚本  app_backend_deploy.hbs
 * @param {*} config 
 */
function genBackendDeploySh(config) {
    let renderData = {
        workdir:config.workdir,
        targetDir:config.appData.gitLab.appBackendRepoName
      };
  
    let template = fs.readFileSync(`./templates/app_backend_deploy.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/app_backend_deploy.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成后端发布脚本:${output}`)
    return output;
}

/**
 * 生成应用后端代码仓库初始化脚本
 * @param {*} config 
 */
function genAppBackendRepoSh(config){
    let renderData = {
        workdir:config.workdir,
        projectCode:config.appData.projectCode,
        initJeecgShPath:config.initJeecgShPath,
        targetDir:config.appData.gitLab.appBackendRepoName,
        gitlabUrls:config.appData.gitLab.backendRepoUrls.join(','),
        mergeDirs:config.appData.gitLab.microBackendRepoNames.join(','),
        nginxUser:config.appData.deploy.nginxUser,
        nginxServer:config.appData.deploy.nginxServer,
        nginxConf:path.join(config.workdir,`/${config.appData.gitLab.backendRepoName}/jeecg-boot/docs/${config.appData.projectCode}.conf`)
      };
  
    let template = fs.readFileSync(`./templates/app_backend_repo.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/app_backend_repo.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成应用后端代码仓库初始化脚本:${output}`)
    return output;
}

/**
 * 生成jeecgboot后端init.sh
 * @param {*} config 
 * @returns 
 */
function genJeecgBackendInitSh(config){
    let renderData = {
        projectCode:config.appData.projectCode,
        deployHost:config.appData.deploy.deployBackendHost,
        deployPort:config.appData.deploy.deployBackendPort,
        deployBackendUser:config.appData.deploy.deployBackendUser,
        dbUser:config.appData.dbConfig.dbUser,
        dbPassword:config.appData.dbConfig.dbPassword,
        dbName:config.appData.dbConfig.dbName,
      };
  
    let template = fs.readFileSync(`./templates/init_jeecg.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/init_jeecg.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`jeecgboot后端init脚本:${output}`)
    return output;
}


/**
 * 应用前端代码仓库初始化(合并微应用代码仓库并发布)
 * @param {*} config 
 */
function initAppWebRepo(config){
    console.log(`==> 开始初始化应用前端仓库`)
    //生成jeecgboot-vue3前端init.sh
    config.initJeecgVue3ShPath = genJeecgVue3WebInitSh(config);
    //生成应用前端代码仓库初始化脚本
    let output = genAppWebRepoSh(config);
    //执行脚本文件
     try {
        console.log(`==> 开始部署应用前端服务`)
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`应用前端代码仓库初始化脚本执行报错：`, e);
        console.error(`==> 请手动合并web端微应用代码！`);
    }
}

/**
 * 生成应用前端代码仓库初始化脚本
 * @param {*} config 
 */
function genAppWebRepoSh(config){
    let renderData = {
        workdir:config.workdir,
        initJeecgVue3ShPath:config.initJeecgVue3ShPath,
        targetDir:config.appData.gitLab.appWebRepoName,
        gitlabUrls:config.appData.gitLab.webRepoUrls.join(','),
        mergeDirs:config.appData.gitLab.microWebRepoNames.join(',')
      };
    let template = fs.readFileSync(`./templates/app_web_repo.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/app_web_repo.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成应用前端代码仓库初始化脚本:${output}`)
    return output;
}

/**
 * 生成jeecgboot-vue3前端init.sh
 * @param {*} config 
 * @returns 
 */
function genJeecgVue3WebInitSh(config){
    let renderData = {
        projectCode:config.appData.projectCode
      };
  
    let template = fs.readFileSync(`./templates/init_jeecg_vue3.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/init_jeecg_vue3.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`jeecgboot-vue3前端init脚本:${output}`)
    return output;
}

/**
 * 处理应用代码存储目录
 */
function handleAppDir(config) {
    let workdir = config.workdir;
    let dir = path.join(workdir,`/${config.appData.projectCode}`);
    // 创建一个新的文件夹
    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
        console.error('An error occurred while creating the directory:', err);
        return;
        }
        console.log(`${dir} The directory has been created successfully.`);
    });
    config.baseDir = workdir;
    return dir;
}

/**
 * 重新写入init.json文件
 * @param {*} config 
 */
function rewriteInitJson(config){
    let file = path.join(config.workdir,`/${config.appData.gitLab.webRepoName}/scripts/init.json`)
    fs.writeFileSync(file, JSON.stringify(config, null, 2))
    let baseFile = path.join(config.baseDir,`/${config.appData.gitLab.webRepoName}/scripts/init.json`)
    fs.writeFileSync(baseFile, JSON.stringify(config, null, 2))
}

module.exports = AiApp;

