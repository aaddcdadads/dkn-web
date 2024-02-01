#!/bin/bash
set -x
rm -rf src/views/haomo/test
# cp src/views/haomo/1750448384092672002/page.vue src/views/dashboard/Analysis/index.vue
cp docs/compontents/HmColorKit.vue src/components/built-in/jeecg/HmColorKit.vue
npm run build
rsync -avz --delete --progress dist/* haomo@192.168.1.7:/var/www/html/dkn