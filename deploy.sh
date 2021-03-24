git checkout -b deployment
git checkout deployment
git merge -
npm run build
git add -f dist
git commit -m "gh-pages-bump"
git subtree push --prefix dist origin gh-pages-4
git checkout -