#!/bin/bash
set -x
./fix-compont.sh
npm run build
rsync -avz --delete --progress dist/* haomo@192.168.1.7:/var/www/html/dkn