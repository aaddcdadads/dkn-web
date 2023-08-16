const fs = require('fs');
const os = require('os');
const path = require('path');
const _ = require('lodash');

const Handlebars = require('handlebars');

let helpers = require('handlebars-helpers')({
  handlebars: Handlebars
});
require('just-handlebars-helpers').registerHelpers(Handlebars);

Handlebars.registerHelper('getEnumOptions', function (prop) {
  if (prop.type !== 'Enum') {
    console.warn(`getEnumOptions: ${JSON.stringify(prop)} is not enum`);
    return "\[\]";
  }
  if (!prop.keywords || prop.keywords.length === 0) {
    console.warn(`getEnumOptions: ${JSON.stringify(prop)} has no keywords`);
    return "\[\]";
  }
  return _.keyBy(prop.keywords, 'name')['options'].description;
});

Handlebars.registerHelper('getPropDefaultValue', function (prop) {
  if (prop.default) {
    let defaultValue = prop.default.trim();
    if (defaultValue.indexOf('function') !== 0) {
      return prop.default;
    }
    try {
      return JSON.stringify(eval(`(${defaultValue})()`));
    } catch (err) {
      console.warn(`组件的prop默认值解析失败: ${prop.name} => ${defaultValue}`)
      return '';
    }
  } else {
    return prop.defaultValue ? prop.defaultValue.value : '';
  }
});

Handlebars.registerHelper('kebabCase', function (value) {
  return _.kebabCase(value);
});

module.exports = Handlebars;
