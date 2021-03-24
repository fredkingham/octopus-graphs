git checkout -b deployment
git checkout deployment
git merge -m "merged" -
npm run build
git add -f dist
git commit -m "gh-pages-bump"
git subtree push --prefix dist origin gh-pages-4
git checkout -
echo 'deployed to https://fredkingham.github.io/octopus-graphs'