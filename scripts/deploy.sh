#!/usr/bin/env bash

# checkout `master` branch in `_site` folder
echo 'git worktree add ./_site master'
git worktree add _site master

# populate `_site`
echo 'bundle exec jekyll build'
bundle exec jekyll build

# update `master`
echo 'cd _site'
cd _site
echo 'git add .'
git add .
echo 'git commit --allow-empty -m "Build from \$(git log --format=format:%H develop -1)"'
git commit --allow-empty -m "Build from $(git log --format=format:%H develop -1)"
echo 'git push origin master --no-verify'
git push origin master --no-verify
