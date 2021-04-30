while [ true ]; do
git fetch origin main
git reset --hard origin/main
node index.js
done