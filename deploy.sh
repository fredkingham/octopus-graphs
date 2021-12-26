git branch -D deployment
git checkout -b deployment
git checkout deployment
git merge -m "merged" -
npm run build
git add -f dist
git commit -m "gh-pages-bump"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages-4
git checkout -
git branch -D gh-pages
echo 'deployed to https://fredkingham.github.io/octopus-graphs'
