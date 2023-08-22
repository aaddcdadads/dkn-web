const { exec,execSync,spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const Handlebars = require('../lib/handlebars');
const yaml  = require('js-yaml');

function AiMicroApp() {}

/**
 * 创建微应用
 * @param {*} config 
 */
AiMicroApp.prototype.createProjet = function(config) {
    console.log(`-- 开始创建微应用:${config.microAppData.projectName}`)
    if(checkInitStaus(config)){
        return;
    }
    //更新version
    config.version = "1.1";

    //处理应用代码、脚本存储目录
    config.workdir = handleAppDir(config);

    //初始化数据库
    initDataBase(config);

    //微应用前端代码仓库初始化
    initMicroWebRepo(config);

    //微应用后端代码仓库初始化
    initMicroBackendRepo(config);

    //重新写入init.json文件
    rewriteInitJson(config);

    console.log(`==> 微应用:${config.microAppData.projectName}创建完成！`)

}



/**
 * 发布应用
 * @param {*} config 
 */
AiMicroApp.prototype.publishProjet = function(config) {
    console.logg("==> 微应用部署 start");
    //发布后端
    deployBackend(config);
    //发布前端
    deployWeb(config);
    console.logg("==> 微应用部署成功！");
}

/**
 * 发布后端
 */
function deployBackend(config){
    //生成后端发布脚本 backend_deploy.hbs
    let output = genBackendDeploySh(config);
    //执行脚本发布脚本部署后端
    try {
        console.log(`==> 开始部署微应用后端服务`)
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`微应用后端部署脚本执行报错：`, e);
        console.error(`==> 请手动部署微应用后端！`);
    }
}

/**
 * 发布前端
 */
function deployWeb(config){
    //生成前端发布脚本  deploy_web.hbs
    let output = genWebeploySh(config);
    //执行脚本发布脚本部署后端
    try {
        console.log(`==> 开始部署应用前端服务`)
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`应用前端部署脚本执行报错：`, e);
        console.error(`==> 请手动部署应用前端！`);
    }
}


/**
 * 生成前端发布脚本  deploy_web.hbs
 * @param {*} config 
 */
function genWebeploySh(config) {
    let renderData = {
        workdir:path.join(config.workdir,`/${config.microAppData.projectCode}/${config.microAppData.gitLab.appBackendRepoName}`)
      };
  
    let template = fs.readFileSync(`./templates/deploy_web.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/deploy_web.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成前端发布脚本:${output}`)
    return output;
}

/**
 * 生成后端发布脚本  backend_deploy.hbs
 * @param {*} config 
 */
function genBackendDeploySh(config) {
    let renderData = {
        workdir:path.join(config.workdir,`/${config.microAppData.projectCode}/${config.microAppData.gitLab.appBackendRepoName}`),
        projectCode:config.microAppData.projectCode,
        nginxUser:config.microAppData.deploy.nginxUser,
        nginxServer:config.microAppData.deploy.nginxServer
      };
  
    let template = fs.readFileSync(`./templates/backend_deploy.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/backend_deploy.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成后端发布脚本:${output}`)
    return output;
}

/**
 * 检查初始化状态
 */
function checkInitStaus(config){
    if(config.version != "1.0"){
        console.log(`只有version=1.0才会进行项目初始化`);
        return true;
    }

    //检查是否存在本地仓库
    let workdir = config.workdir;
    let dir = path.join(workdir,`/${config.microAppData.projectCode}/${config.microAppData.gitLab.webRepoName}`);

    let initFlag = false;
    //判断文件夹是否存在
    fs.access(dir, fs.constants.F_OK, (err) => {
        if (err) {
            //console.log('项目未初始化');
            initFlag = false;
        } else {
            console.log('项目已初始化');
            initFlag = true;
        }
    });

    return initFlag;
}

/**
 * 重新写入init.json文件
 * @param {*} config 
 */
function rewriteInitJson(config){
    let file = path.join(config.workdir,`/${config.microAppData.gitLab.webRepoName}/scripts/init.json`)
    fs.writeFileSync(file, JSON.stringify(config, null, 2))
    let baseFile = path.join(config.baseDir,`/${config.microAppData.gitLab.webRepoName}/scripts/init.json`)
    fs.writeFileSync(baseFile, JSON.stringify(config, null, 2))
}

/**
 * 微应用前端代码仓库初始化
 */
function initMicroWebRepo(config){
    console.log("==> 初始化前端仓库");
    //生成jeecgboot-vue3前端init.sh
    config.initJeecgVue3ShPath = genJeecgVue3WebInitSh(config);
    //生成微应用前端代码仓库初始化脚本
    let output = genMicroWebRepoSh(config);
    //执行脚本文件
     try {
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`微应用前端代码仓库初始化脚本执行报错：`, e);
    }
}

/**
 * 生成微应用前端代码仓库初始化脚本
 */
function genMicroWebRepoSh(config){
    let renderData = {
        baseDir:config.baseDir,
        repoDirectory:config.workdir,
        projectCode:config.microAppData.projectCode,
        webRepoUrl:config.microAppData.gitLab.webRepoUrl,
        webRepoName:config.microAppData.gitLab.webRepoName,
        webTemplateRepoUrl:config.microAppData.gitLab.webTemplateRepoUrl,
        webTemplateRepoBranch:config.microAppData.gitLab.webTemplateRepoBranch,
        initJeecgVue3ShPath:config.initJeecgVue3ShPath,
        webTemplateRepoName:getGitRepoFolderName(config.microAppData.gitLab.webTemplateRepoUrl)
      };
  
    let template = fs.readFileSync(`./templates/micro_web_repo.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/micro_web_repo.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成微应用前端代码仓库初始化脚本:${output}`)
    return output;
}

/**
 * 获取git仓库文件夹名称
 * @param {*} url 
 */
function getGitRepoFolderName(url){
   return url.substring(url.lastIndexOf('/')+1,url.indexOf('.git'))
}

/**
 * 微应用后端代码仓库初始化
 */
function initMicroBackendRepo(config){
    console.log("==> 初始化后端仓库");
    //生成jeecgboot后端init.sh
    config.initJeecgShPath = genJeecgBackendInitSh(config);
    //生成微应用后端代码仓库初始化脚本
    let output = genMicroBackendRepoSh(config);
    //执行脚本文件
    try {
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`生成微应用后端代码仓库初始化脚本执行报错：`, e);
    }

    //处理yml配置文件
    handleYml(config);

    //提交处理后的代码
    commitBackendRepo(config);
}



/**
 * 提交后端代码
 */
function commitBackendRepo(config){
    console.log(`==> 代码提交`)
    //生成脚本  commit.sh
    let output = genBackendCommitSh(config);
    //执行脚本
    try {
        execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`代码提交脚本执行报错：`, e);
    }
}

/**
 * 生成后端代码提交脚本
 * @param {*} config 
 */
function genBackendCommitSh(config) {
    let renderData = {
        workdir:path.join(config.workdir,`/${config.microAppData.gitLab.backendRepoName}`),
        describe:"init repo"
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
 * 处理yml配置文件
 */
function handleYml(config){
    //配置文件所在目录
    let baseDir = path.join(config.workdir,`/${config.microAppData.gitLab.backendRepoName}/jeecg-boot/jeecg-boot-module-system/src/main/resources/`);
    //dev
    let devYmlFlile = path.join(baseDir,`application-dev.yml`);
    handleDatasuorceYml(config,devYmlFlile);
    //test
    let testYmlFlile = path.join(baseDir,`application-test.yml`);
    handleDatasuorceYml(config,testYmlFlile);
    //prod
    let prodYmlFlile = path.join(baseDir,`application-prod.yml`);
    handleDatasuorceYml(config,prodYmlFlile);
}

/**
 * 处理yml文件数据库配置
 * @param {*} config 
 * @param {*} file 
 */
function handleDatasuorceYml(config,ymlFlile){
    try {
        // 读取YAML文件内容
        const fileContents = fs.readFileSync(ymlFlile, 'utf8');
    
        // 解析YAML内容
        const data = yaml.load(fileContents);
        //console.log(data.spring.datasource.dynamic.datasource);
        let datasource = data.spring.datasource.dynamic.datasource;

        //master处理
        datasource.master={
            url:`jdbc:mysql://${config.microAppData.dbConfig.dbHost}:3306/${config.microAppData.projectCode}?characterEncoding=UTF-8&useUnicode=true&useSSL=false&tinyInt1isBit=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai`,
            username: config.microAppData.projectCode,
            password: config.microAppData.dbConfig.dbPassword,
            'driver-class-name': 'com.mysql.cj.jdbc.Driver'
        }

        data.spring.datasource.dynamic.datasource = datasource;

        // 创建新的YAML对象，包含修改后的配置信息
        const newData = { ...data}; // 使用展开操作符（spread operator）来合并修改后的配置信息

        // 将新的YAML对象写回到文件
        fs.writeFileSync(ymlFlile, yaml.dump(newData));

    } catch (error) {
        console.error(error);
    }
}

/**
 * 生成微应用后端代码仓库初始化脚本
 * @todo
 */
function genMicroBackendRepoSh(config){
    let renderData = {
        repoDirectory:config.workdir,
        projectCode:config.microAppData.projectCode,
        backendRepoUrl:config.microAppData.gitLab.backendRepoUrl,
        backendRepoName:config.microAppData.gitLab.backendRepoName,
        backendTemplateRepoUrl:config.microAppData.gitLab.backendTemplateRepoUrl,
        backendTemplateRepoBranch:config.microAppData.gitLab.backendTemplateRepoBranch,
        initJeecgShPath:config.initJeecgShPath,
        nginxUser:config.microAppData.deploy.nginxUser,
        nginxServer:config.microAppData.deploy.nginxServer,
        backendTemplateRepoName:getGitRepoFolderName(config.microAppData.gitLab.backendTemplateRepoUrl),
        nginxConf:path.join(config.workdir,`/${config.microAppData.gitLab.backendRepoName}/jeecg-boot/docs/${config.microAppData.projectCode}.conf`)
      };
  
    let template = fs.readFileSync(`./templates/micro_backend_repo.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //生成脚本文件
    let output = path.join(config.workdir,`/micro_backend_repo.sh`);
    fs.writeFileSync(output, templateContent);
    console.log(`生成微应用后端代码仓库初始化脚本:${output}`)
    return output;
}

/**
 * 处理应用代码存储目录
 */
function handleAppDir(config) {
    let workdir = config.workdir;
    //代码存储目录
    let dir = path.join(workdir,`/${config.microAppData.projectCode}`);

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
 * 初始化数据库
 * @param {*} config 
 */
function initDataBase(config){
    console.log("==> 初始化数据库");
    //生成初始化数据库脚本文件
    let output = genDbInitShFile(config);
    console.log(`数据库初始化脚本：${output}`)

    //执行db初始脚本文件
    try {
        execSync(`chmod a+x ${output}`, {stdio: 'inherit'});
        let res = execSync(`bash ${output}`, {stdio: 'inherit'});
        console.log(res);

        // 远程连接服务器并执行命令
        //let sqlFile = config.microAppData.dbConfig.sqlPath?config.microAppData.dbConfig.sqlPath:"";
        //const command = `ssh -t -t ${config.microAppData.dbConfig.dbUser}@${config.microAppData.dbConfig.dbHost} 'bash ${config.microAppData.dbConfig.workdir}/init_db.sh ${config.microAppData.projectCode} ${config.microAppData.dbConfig.dbPassword} ${config.microAppData.dbConfig.sourceDb} 1 ${sqlFile}'`;
        //console.log(`command: ${command}`);
        //const res = execSync(command, { encoding: 'utf-8',stdio: 'inherit' });
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
        dbConfig: config.microAppData.dbConfig,
        projectCode:config.microAppData.projectCode
      };
  
    let template = fs.readFileSync(`./templates/init_db.hbs`, "utf8");
    let hbTemplate = Handlebars.compile(template);
    let templateContent = hbTemplate(renderData);
    //创建新的db初始脚本文件
    let output = path.join(config.workdir,`/init_db.sh`);
    fs.writeFileSync(output, templateContent);

    return output;
}


/**
 * 生成jeecgboot-vue3前端init.sh
 * @param {*} config 
 * @returns 
 */
function genJeecgVue3WebInitSh(config){
    let renderData = {
        projectCode:config.microAppData.projectCode
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
 * 生成jeecgboot后端init.sh
 * @param {*} config 
 * @returns 
 */
function genJeecgBackendInitSh(config){
    let renderData = {
        projectCode:config.microAppData.projectCode,
        deployHost:config.microAppData.deploy.deployBackendHost,
        deployPort:config.microAppData.deploy.deployBackendPort,
        deployBackendUser:config.microAppData.deploy.deployBackendUser,
        dbUser:config.microAppData.dbConfig.dbUser,
        dbPassword:config.microAppData.dbConfig.dbPassword,
        dbName:config.microAppData.dbConfig.dbName
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


module.exports = AiMicroApp;

