# checkout `master` branch in `_site` folder
git worktree add _site master
# populate `_site`
jekyll build
# update `master`
cd _site
git add .
git commit --allow-empty -m "Build from $(git log --format=format:%H develop -1)"
git push origin master --no-verify