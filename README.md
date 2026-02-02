# WebSite LM

## Lever les protection réseaux
sudo systemctl start ssh && sudo ufw allow 22

## Fermer les ouvertures réseaux
sudo systemctl stop ssh && sudo ufw deny 22

## Transferer les fichiers local vers le serveur
rsync -e "ssh -i ~/.ssh/id_rsa -o IdentitiesOnly=yes" -avz --rsync-path="sudo rsync" /var/www/html/website/website_1/ pi5:/var/www/html/LM/

## Push an existing repository from the command line
git config --global user.email "lienhartm8@gmail.com"
git config --global user.name "lienhartm"
git remote add origin git@github.com:lienhartm/Website.git
git branch -M main
git push -u origin main

# sha256 pour integriter

openssl dgst -sha256 -binary style/style.css | openssl base64 -A
openssl dgst -sha256 -binary script/script.js | openssl base64 -A
openssl dgst -sha256 -binary favicon_io/site.webmanifest | openssl base64 -A