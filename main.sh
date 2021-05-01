while [ true ]; do
clear
node --version
git fetch --all
git reset --hard origin/main
node index.js
done
