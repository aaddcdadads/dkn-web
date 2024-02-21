#!/bin/bash
set -x
./fix-compont.sh
npm run build:dkntest
rsync -avz --delete --progress dist/* sports@121.4.21.205:/var/www/html/dkn-test
