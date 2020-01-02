#!/usr/bin/env bash

# configure git
git config user.name "${GH_USER}" && \
git config user.email "${GH_EMAIL}" && \
git config remote.origin.fetch +refs/heads/*:refs/remotes/origin/* && \

# checkout `master` branch in `_site` folder
git fetch --unshallow origin master && \
git worktree add -b _site master origin/master && \

# populate `_site`
bundle exec jekyll build && \

# update `master`
cd _site && \
git add . && \
git commit --allow-empty -m "Build from $(git log --format=format:%H develop -1)" && \
git push origin master --no-verify && \
cd ..
