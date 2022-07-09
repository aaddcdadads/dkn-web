#!/bin/bash
# 部署服务器目录
deploy_dir=/var/www/html/jeecgboot-vue3
# api proxy地址
api_proxy=http://jeecgboot-vue3.dev.haomo-tech.com:8000/jeecg-boot

# 检查以上脚本是否已经修改
if [ ${deploy_dir} == '/var/www/html/jeecgboot-vue3' ]
then
  echo '请修改部署参数。如不清楚修改步骤，请阅读文档：毫末部署说明.md'
  exit -1
fi

if [ ${api_proxy} == 'http://jeecgboot-vue3.dev.haomo-tech.com:8000/jeecg-boot' ]
then
  echo '请修改部署参数。如不清楚修改步骤，请阅读文档：毫末部署说明.md'
  exit -1
fi

# 兼容mac和Linux的
sedi () {
    case $(uname -s) in
        *[Dd]arwin* | *BSD* ) sed -i '' "$@";;
        *) sed -i "$@";;
    esac
}

# 修改deploy.sh中的部署路径
ESCAPED_DEPLOY_DIR=$(printf '%s\n' "$deploy_dir" | sed -e 's/[\/&]/\\&/g')
sedi "s/\/var\/www\/html\/jeecgboot\-vue3/$ESCAPED_DEPLOY_DIR/g" deploy.sh

# 修改.env.development中的代理路径
ESCAPED_API_PROXY=$(printf '%s\n' "$api_proxy" | sed -e 's/[\/&]/\\&/g')
sedi "s/http:\/\/jeecgboot\-vue3.dev.haomo-tech.com:8000\/jeecg\-boot/$ESCAPED_API_PROXY/g" .env.development

git add .
git commit -m "chore: init project"