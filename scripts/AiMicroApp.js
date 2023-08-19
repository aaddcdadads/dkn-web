const { exec,execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const Handlebars = require('../lib/handlebars');

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
        workdir:path.join(config.workdir,`/${config.microAppData.projectCode}/${config.microAppData.gitLab.appBackendRepoName}/jeecg-boot`)
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
            console.log('项目未初始化');
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
        //execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
        exec(`chmod a+x ${output} && sh ${output}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`执行脚本时发生错误: ${error}`);
                return;
            }
            console.log(stdout);
            console.log(stderr);
        });
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
        //execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
        exec(`chmod a+x ${output} && sh ${output}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`执行脚本时发生错误: ${error}`);
                return;
            }
            console.log(stdout);
            console.log(stderr);
        });
    } catch (e) {
        console.error(`生成微应用后端代码仓库初始化脚本执行报错：`, e);
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
    console.log("==> 1.初始化数据库");
    //生成初始化数据库脚本文件
    let output = genDbInitShFile(config);
    console.log(`数据库初始化脚本：${output}`)

    //执行db初始脚本文件
    try {
        //execSync(`chmod a+x ${output} && sh ${output}`, {stdio: 'inherit'});
        exec(`chmod a+x ${output} && sh ${output}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`执行脚本时发生错误: ${error}`);
                return;
            }
            console.log(stdout);
            console.log(stderr);
        });
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

