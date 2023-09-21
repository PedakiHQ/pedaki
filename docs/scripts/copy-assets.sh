cd "$(dirname "$0")/.."

echo "Copying assets to public folder"
mkdir -p ./public
cp -v ../apps/www/public/logo-dark.svg ./public/logo-dark.svg
cp -v ../apps/www/public/logo-light.svg ./public/logo-light.svg
cp -v ../apps/www/public/favicon-32x32.png ./favicon.png

echo "Assets copied to public folder"