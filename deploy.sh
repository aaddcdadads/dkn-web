#!/bin/bash
set -x
npm run build
rsync -avz --delete --progress dist/* haomo@192.168.1.7:/var/www/html/jeecgboot-vue3