while [ true ]; do
clear
git fetch --all
git reset --hard origin/main
node api/index.js
done
