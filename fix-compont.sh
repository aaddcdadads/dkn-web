#!/bin/bash
rm -rf src/views/haomo/test
rm -rf dist
# cp src/views/haomo/1750448384092672002/page.vue src/views/dashboard/Analysis/index.vue
cp docs/compontents/HmColorKit.vue src/components/built-in/jeecg/HmColorKit.vue
cp docs/compontents/UploadImage.vue src/components/built-in/jeecg/formily/UploadImage.vue
cp docs/compontents/HmAntTreeSelect.vue src/components/built-in/jeecg/HmAntTreeSelect.vue
