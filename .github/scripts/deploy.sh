#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# deploy to https://<USERNAME>.github.io
git push -f git@github.com:Felix-Staud/Felix-Staud.github.io.git main

cd -
