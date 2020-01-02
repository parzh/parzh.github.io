#!/usr/bin/env bash
set -o verbose

# build local `master`
jekyll clean && \
git worktree add -f _site master && \
bundle exec jekyll build && \

# sync with remote `master`
cd _site && \
git add . && \
git commit --allow-empty -m "$(echo Build from $(git log --format=format:%H develop -1))" && \
git push origin master --no-verify && \
cd ..
