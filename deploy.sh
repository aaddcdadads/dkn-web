#!/bin/bash
set -x
rm -rf src/views/haomo/test
npm run build
rsync -avz --delete --progress dist/* haomo@192.168.1.7:/var/www/html/dkn