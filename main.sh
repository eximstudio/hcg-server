while [ true ]; do
git fetch --all
git reset --hard origin/main
node index.js
done