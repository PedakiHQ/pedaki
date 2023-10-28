cd "$(dirname "$0")/.."

echo "Downloading assets and output to public folder"
mkdir -p ./public
wget https://static.pedaki.fr/logo/logo-dark.svg -O ./public/logo-dark.svg
wget https://static.pedaki.fr/logo/logo-light.svg -O ./public/logo-light.svg
wget https://static.pedaki.fr/logo/favicon-32x32.png -O ./public/favicon.png

echo "Assets downloaded to public folder"