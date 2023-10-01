cd "$(dirname "$0")/.."

echo "Downloading assets and output to public folder"
mkdir -p ./public
wget https://raw.githubusercontent.com/Vahor/pedaki.fr/main/apps/www/public/logo-dark.svg -O ./public/logo-dark.svg
wget https://raw.githubusercontent.com/Vahor/pedaki.fr/main/apps/www/public/logo-light.svg -O ./public/logo-light.svg
wget https://raw.githubusercontent.com/Vahor/pedaki.fr/main/apps/www/public/favicon-32x32.png -O ./public/favicon.png

echo "Assets downloaded to public folder"