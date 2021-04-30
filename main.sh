while [ true ]; do
clear
git fetch --all
git reset --hard origin/main
node --version
node index.js
done
