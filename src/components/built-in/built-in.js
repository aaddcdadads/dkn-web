var fs = require("fs");
var path = require("path");
const uuidv4 = require('uuid').v4;
const _ = require('lodash');  

// 获取组件Map
let compMap = getCompMap("./")

// 读取组件config
let config = JSON.parse(fs.readFileSync('./builtin-config.json'))

// 根据config得到分组component
let compsGroupByConfig = 
  _.each(config, group => {
    group.componentList = 
      _(group.componentList)
      .filter(comp => compMap.has(comp.name))
      .map(comp => Object.assign(comp, compMap.get(comp.name)))
  })

// 写入json
fs.writeFileSync('./builtin.json', JSON.stringify(compsGroupByConfig));

/**
 * 读取组件代码，获取组件Map
 * @param {*} dir 
 */
function getCompMap(dir, map = new Map()){
  var arr = fs.readdirSync(dir);
  // console.log('arr', arr)
  arr.forEach(function(item){
    var fullpath = path.join(dir,item);
    var stats = fs.statSync(fullpath);
    if(stats.isDirectory()){
      getCompMap(fullpath, map);
    }else if (item.indexOf(".vue") != -1){
      map.set(item.replace(".vue", ""), {
        id: uuidv4(),
        code: fs.readFileSync(fullpath, 'utf-8'),
        isBuiltIn: true,
        imgUrl: `built-in/${fullpath.replace(".vue", "")}.png`,
        importPath: `built-in/${fullpath.replace(".vue", "")}`,
        type: 0
      })
    }
  });
  return map;
}