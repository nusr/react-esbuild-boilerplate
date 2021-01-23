#!/usr/bin/env sh
set -e
cd dist
git init
git add .
git commit -m 'Update Github Gages'
git push -f git@github.com:nusr/react-esbuild.git master:gh-pages
cd -