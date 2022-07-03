#!/bin/bash
npm run build
rsync -avz dist/* root@192.168.1.7:/var/www/html/jeecgboot-vue3