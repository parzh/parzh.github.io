#!/usr/bin/env bash

# checkout `master` branch in `_site` folder
git fetch --all && \
git worktree add _site master && \

# populate `_site`
bundle exec jekyll build && \

# update `master`
cd _site && \
git add . && \
git commit --allow-empty -m "$(echo Build from $(git log --format=format:%H develop -1))" && \
git push origin master --no-verify && \
cd ..
