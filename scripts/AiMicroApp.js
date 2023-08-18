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

    //微应用前端代码仓库初始化
    initMicroWebRepo(config);

    //微应用后端代码仓库初始化
    initMicroBackendRepo(config);

    //重新写入init.json文件
    rewriteInitJson(config);

    console.log(`-- 微应用:${config.microAppData.projectName}创建完成！`)

}

/**
 * 重新写入init.json文件
 * @param {*} config 
 */
function rewriteInitJson(config){
    let path = path.join(config.workdir,`/${config.microAppData.gitLab.webRepoName}/scripts/init.json`)
    fs.writeFileSync(path, JSON.stringify(config, null, 2))
    let basePath = path.join(config.baseDir,`/${config.microAppData.gitLab.webRepoName}/scripts/init.json`)
    fs.writeFileSync(basePath, JSON.stringify(config, null, 2))
}

/**
 * 微应用前端代码仓库初始化
 */
function initMicroWebRepo(config){
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
        repoDirectory:config.workdir,
        webRepoUrl:config.microAppData.gitLab.webRepoUrl,
        webRepoName:config.microAppData.gitLab.webRepoName,
        webTemplateRepoUrl:config.microAppData.gitLab.webTemplateRepoUrl,
        initJeecgVue3ShPath:config.initJeecgVue3ShPath
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
 * 微应用后端代码仓库初始化
 */
function initMicroBackendRepo(config){
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
        nginxServer:config.microAppData.deploy.nginxServer
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
    console.log("初始化数据库~");
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
        dbConfig: config.microAppData.dbConfig
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

