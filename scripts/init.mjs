#!/usr/bin/env node
import { exec,execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import AiMicroApp from './AiMicroApp.js'
import AiApp from './AiApp.js'
const aiMicroApp = new AiMicroApp();
const aiApp = new AiApp();

//读取配置
const config = JSON.parse(fs.readFileSync('./scripts/init.json', 'utf8'));
console.log(config)

switch(config.action){
    case 'create': //创建应用
        createProject();
        break;
    case 'publish': //发布应用
        publishProject();
        break;
    case 'rollback': //回滚应用
        rollBackProject();
        break;
}

//创建应用
function createProject(){
    if(config.category === "micro"){
        //创建微应用
        aiMicroApp.createProjet(config);
    }else{
        //创建应用
        aiApp.createProjet(config);
    }
}


//创建应用
function createAppProjet(){

}

//发布应用
function publishProject(){

}

//回滚应用
function rollBackProject(){

}