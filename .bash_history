#1747272922
sudo systemctl stop apache2
#1747272926
sudo systemctl disable apache2
#1747272933
sudo lsof -i :80
#1747272949
sudo ufw allow 80/tcp
#1747272949
sudo ufw reload
#1747272957
sudo lsof -i :80
#1747272980
sudo apt-get update && sudo apt-get upgrade -y && reboot
#1747273044
adduser deploy
#1747273057
cd /home
#1747273063
apt install git && git clone https://github.com/michaelgomees/whaticket.git
#1747273094
cd /home/whaticket
#1747273097
chmod +x instalar_primaria instalar_nova_instancia && ./instalar_primaria
#1747273103
0
#1747273109
chmod +x instalar_primaria instalar_nova_instancia && ./instalar_primaria
#1747274032
sudo fallocate -l 4G /swapfile
#1747274036
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096
#1747274080
sudo chmod 600 /swapfile
#1747274084
sudo mkswap /swapfile
#1747274087
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
#1747274095
swapon --show
#1747274095
free -h
#1747274114
ls -lh /swapfile
#1747274119
sudo chmod 600 /swapfile
#1747274122
sudo mkswap /swapfile
#1747274127
sudo swapon /swapfile
#1747274131
swapon --show
#1747274131
free -h
#1747274147
cd /home/deploy/zappybot/backend
#1747274151
sudo su deploy 
#1747274241
cd /home/deploy/zappybot/frontend && rm -rf node_modules/ && rm -rf build/ && npm install --force && npm run build
#1747275291
cd /home/deploy/zappybot/backend
#1747275297
sudo su deploy 
#1747278673
cd /home/deploy/zappybot/frontend && rm -rf node_modules/ && rm -rf build/ && npm install --force && npm run build
#1747347211
/etc/nginx/sites-available/
#1747347217
/etc/nginx/sites-enabled/
#1747347222
ls /etc/nginx/sites-available
#1747347244
ls /etc/nginx/sites-enabled
#1747347730
sudo mkdir -p /var/www/zappybot.site
#1747347735
sudo chown -R www-data:www-data /var/www/zappybot.site
#1747347739
sudo chmod -R 755 /var/www/zappybot.site
#1747347744
cd /tmp
#1747347749
wget https://wordpress.org/latest.tar.gz
#1747347756
tar -xvzf latest.tar.gz
#1747347761
sudo cp -R wordpress/* /var/www/zappybot.site/
#1747347766
sudo mysql -u root -p
#1747347867
CREATE DATABASE zappybotvendas DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
#1747347905
CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'G?gUB6~QPLS*g';
#1747347906
GRANT ALL PRIVILEGES ON zappybotvendas.* TO 'wpuser'@'localhost';
#1747348240
sudo mysql -u root -p
#1747348297
sudo cp -R /tmp/wordpress/* /var/www/zappybot.site/
#1747348301
sudo chown -R www-data:www-data /var/www/zappybot.site
#1747348305
sudo chmod -R 755 /var/www/zappybot.site
#1747348327
sudo nano /etc/nginx/sites-available/zappybot-site
#1747348352
ls /run/php/
#1747348364
sudo nano /etc/nginx/sites-available/zappybot-site
#1747348404
sudo nginx -t
#1747348410
sudo systemctl reload nginx
#1747348469
dig +short zappybot.site
#1747348680
dig NS zappybot.site +short
#1747348949
curl -I http://zappybot.site
#1747348981
sudo nano /etc/nginx/sites-available/zappybot-frontend
#1747349026
sudo nano /etc/nginx/sites-available/zappybot-site
#1747349063
sudo ln -s /etc/nginx/sites-available/zappybot-site /etc/nginx/sites-enabled/
#1747349066
sudo nginx -t
#1747349076
sudo systemctl reload nginx
#1747349085
/var/www/zappybot-site
#1747349095
sudo mkdir -p /var/www/zappybot-site
#1747349099
cd /var/www/zappybot-site
#1747349103
sudo wget https://wordpress.org/latest.zip
#1747349109
sudo apt install unzip -y
#1747349113
sudo unzip latest.zip
#1747349118
sudo mv wordpress/* .
#1747349118
sudo rm -rf wordpress latest.zip
#1747349127
sudo chown -R www-data:www-data /var/www/zappybot-site
#1747349133
sudo find /var/www/zappybot-site -type d -exec chmod 755 {} \;
#1747349138
sudo find /var/www/zappybot-site -type f -exec chmod 644 {} \;
#1747349366
/var/www/zappybot-site
#1747349379
cd /var/www/zappybot-site
#1747349382
ls -la
#1747349401
/etc/nginx/sites-available/zappybot-site
#1747349412
sudo ln -s /etc/nginx/sites-available/zappybot-site /etc/nginx/sites-enabled/
#1747349424
sudo nano /etc/nginx/sites-available/zappybot-site
#1747349436
sudo nginx -t
#1747349445
sudo systemctl reload nginx
#1747349886
SHOW DATABASES LIKE 'zappybotvendas';
#1747349905
sudo mysql -u root -p
#1747349944
mysql -u wpuser -p -h localhost zappybotvendas
#1747350054
sudo rm /var/www/zappybot-site/wp-config.php
#1747350059
sudo nano /var/www/zappybot-site/wp-config.php
#1747350918
php_value upload_max_filesize 64M
#1747350918
php_value post_max_size 64M
#1747350928
/etc/php/7.4/fpm/php.ini
#1747350934
sudo nano /etc/php/7.4/fpm/php.ini
#1747350980
sudo sed -i 's/upload_max_filesize = .*/upload_max_filesize = 64M/' /etc/php/7.4/fpm/php.ini
#1747350984
sudo sed -i 's/post_max_size = .*/post_max_size = 64M/' /etc/php/7.4/fpm/php.ini
#1747350994
sudo systemctl restart php7.4-fpm
#1747350994
sudo systemctl reload nginx
#1747351005
php -i | grep upload_max_filesize
#1747351005
php -i | grep post_max_size
#1747351016
php --ini
#1747351036
sudo nano /etc/php/7.4/fpm/php.ini
#1747351148
sudo systemctl restart php7.4-fpm
#1747351148
sudo systemctl restart nginx
#1747351528
sudo tail -n 50 /var/log/nginx/error.log
#1747351549
sudo netstat -tulnp | grep 4001
#1747351574
sudo ss -tulnp | grep 4001
#1747351602
curl http://localhost:4001
#1747351636
dig +short zappybot.site
#1747351707
dig zappybot.site
#1747351777
sudo systemd-resolve --flush-caches
#1747351788
dig +short zappybot.site @8.8.8.8
#1747351803
curl -I http://localhost
#1747351803
curl -I http://zappybot.site
#1747351870
sudo cat /etc/nginx/sites-enabled/zappybot.site
#1747351876
sudo cat /etc/nginx/sites-available/zappybot.site
#1747351894
sudo ls -l /etc/nginx/sites-enabled/
#1747351918
sudo cat /etc/nginx/sites-available/zappybot-site
#1747351939
ls -l /var/www/zappybot-site
#1747351953
sudo systemctl status php7.4-fpm
#1747351974
sudo tail -n 30 /var/log/nginx/error.log
#1747352029
cd /var/www/zappybot-site/wp-content/plugins/
#1747352033
mv function.php function.php.bkp
#1747352056
ls -la /var/www/zappybot-site/wp-content/plugins/
#1747352098
mv /var/www/zappybot-site/wp-content/plugins/pages-cloner /var/www/zappybot-site/wp-content/plugins/pages-cloner.bkp
#1747352141
sudo systemctl status apache2
#1747352148
sudo systemctl status nginx
#1747352181
mv /var/www/zappybot-site/wp-content/plugins/function.php /var/www/zappybot-site/wp-content/plugins/function.php.disabled
#1747352187
nslookup zappybot.site
#1747352225
/wp-content/plugins/
#1747352230
meu-plugin
#1747352250
cd /var/www/zappybot-site/wp-content/plugins
#1747352252
ls -l
#1747352262
mv function.php function.php.disabled
#1747352278
ls -la
#1747352287
ls -la /var/www/zappybot-site/wp-content
#1747352343
mv /var/www/zappybot-site/wp-content/plugins /var/www/zappybot-site/wp-content/plugins_desativados
#1747352359
tail -n 30 /var/log/apache2/error.log
#1747352378
tail -n 30 /var/log/nginx/error.log
#1747352410
mv /var/www/zappybot-site/wp-content/plugins_desativados /var/www/zappybot-site/wp-content/plugins
#1747352476
wp plugin deactivate --all
#1747352483
mv wp-content/plugins wp-content/plugins_desativados
#1747352487
wp plugin deactivate --all
#1747352502
cd /var/www/zappybot-site
#1747352507
mv wp-content/plugins wp-content/plugins_desativados
#1747352563
rm -rf /var/www/zappybot-site/*
#1747352573
DROP DATABASE nome_do_banco;
#1747352573
CREATE DATABASE nome_do_banco;
#1747352580
DROP DATABASE nome_do_banco;
#1747352617
mysql -u zappyadmin -p
#1747352689
rm -rf /var/www/zappybot-site/*
#1747352695
cd /var/www/zappybot-site
#1747352695
wget https://wordpress.org/latest.zip
#1747352697
unzip latest.zip
#1747352698
mv wordpress/* .
#1747352698
rm -rf wordpress latest.zip
#1747352708
wget https://wordpress.org/latest.zip
#1747352717
unzip latest.zip
#1747352721
mv wordpress/* .
#1747352724
rm -rf wordpress latest.zip
#1747352729
chown -R www-data:www-data /var/www/zappybot-site
#1747352732
chmod -R 755 /var/www/zappybot-site
#1747352904
ipconfig /flushdns
#1747352922
sudo systemd-resolve --flush-caches
#1747352973
cd /var/www/zappybot-site
#1747352973
ls -la
#1747352995
dig zappybot.site +short
#1747353107
curl ifconfig.me
#1747353159
udo cat /etc/apache2/sites-enabled/000-default.conf
#1747353171
sudo cat /etc/apache2/sites-enabled/000-default.conf
#1747353190
sudo nano /etc/apache2/sites-enabled/000-default.conf
#1747353239
sudo systemctl restart apache2
#1747353274
sudo nano /etc/nginx/sites-available/default
#1747354272
sudo nano /etc/nginx/sites-available/zappybot-site
#1747354344
sudo ln -s /etc/nginx/sites-available/zappybot-site /etc/nginx/sites-enabled/
#1747354348
sudo rm /etc/nginx/sites-enabled/default
#1747354351
sudo nginx -t
#1747354376
server_name /var/www/zappybot-site;
#1747354388
sudo nano /etc/nginx/sites-available/zappybot-site
#1747354453
sudo nginx -t
#1747354456
sudo systemctl reload nginx
#1747354545
ls /var/run/php/
#1747354565
sudo nginx -t
#1747354569
sudo systemctl reload nginx
#1747354573
sudo systemctl status php7.4-fpm
#1747354694
server_name 173.249.0.135;
#1747354744
sudo nano /etc/nginx/sites-available/zappybot-site
#1747354776
sudo nginx -t
#1747354778
sudo systemctl reload nginx
#1747396214
cd /home/deploy/zappybot/frontend
#1747396218
grep -r "companiesPlan" .
#1747396277
cd /home/deploy/zappybot/frontend
#1747396279
ls /home/deploy/zappybot/frontend
#1747423247
cd /home/deploy/zappybot/frontend && rm -rf node_modules/ && rm -rf build/ && npm install --force && npm run build
#1747421651
sudo lsof -i :3001
#1747421674
cat /etc/nginx/sites-available/default
#1747421693
sudo nano /etc/nginx/sites-available/admin.zappybot.site
#1747421722
sudo ln -s /etc/nginx/sites-available/admin.zappybot.site /etc/nginx/sites-enabled/
#1747421725
sudo nginx -t
#1747421731
sudo systemctl restart nginx
#1747421981
server {
#1747421984
}
#1747422009
sudo nano /etc/nginx/sites-available/app.zappybot.site
#1747422061
sudo ln -s /etc/nginx/sites-available/app.zappybot.site /etc/nginx/sites-enabled/
#1747422085
sudo systemctl reload nginx
#1747422089
sudo nginx -t
#1747422094
sudo systemctl reload nginx
#1747422128
someVariable.amount
#1747422312
code /home/deploy/zappybot/frontend
#1747439266
sudo rm -rf /var/www/zappybot.site/*
#1747439272
mysql -u root -p
#1747439366
sudo mysql -u root
#1747439381
sudo mysql -u root -p
#1747439392
sudo mysqld_safe --skip-grant-tables &
#1747439449
sudo systemctl stop mariadb
#1747439454
sudo systemctl status mariadb
#1747439479
sudo mysqld_safe --skip-grant-tables &
#1747439528
sudo mysql
#1747439583
sudo systemctl stop mariadb
#1747439583
sudo mysqld_safe --skip-grant-tables &
#1747439646
sudo systemctl stop mariadb
#1747439650
ps aux | grep mysqld
#1747439710
mysql -u root
#1747439671
sudo mysql
#1747439674
mysql -u root
#1747439688
sudo systemctl stop mariadb
#1747439688
sudo killall mysqld
#1747439688
sudo killall mysqld_safe
#1747439692
sudo mysqld_safe --skip-grant-tables
#1747439757
sudo systemctl start mariadb
#1747439831
mysql -u root -p
#1747440039
USE zappybotvendas;
#1747440040
SHOW TABLES;
#1747440050
mysql -u root -p
#1747440090
DROP DATABASE zappybotvendas;
#1747440090
FLUSH PRIVILEGES;
#1747440090
EXIT;
#1747440099
mysql -u root -p
#1747440316
ssh root@173.249.0.135
#1747440327
root@vmi2583900:~# ssh root@173.249.0.135
#1747440328
The authenticity of host '173.249.0.135 (173.249.0.135)' can't be established.
ECDSA key fingerprint is SHA256:pcVv4HrLt7sO+iaBaY5QP0j5KSKPKDCX0LvrTsRh6MQ.
Are you sure you want to continue connecting (yes/no/[fingerprint])?yes
G?gUB6~QPLS*g
#1747440379
root@vmi2583900:~# ssh root@173.249.0.135
#1747440400
ssh root@173.249.0.135
#1747440440
node -v
#1747440440
npm -v
#1747440452
mkdir -p /var/www/zappybot-site
#1747440452
cd /var/www/zappybot-site
#1747440452
git clone https://github.com/michaelgomees/Zappysitevendas.git .
#1747440452
npm install
#1747440453
npm run build
#1747440471
rm -rf /var/www/zappybot-site/*
#1747440474
git clone https://github.com/michaelgomees/Zappysitevendas.git /var/www/zappybot-site
#1747440498
cd /var/www/zappybot-site
#1747440502
npm install
#1747440519
npm run build
#1747440633
ln -s /etc/nginx/sites-available/zappybot.site /etc/nginx/sites-enabled/
#1747440641
nginx -t
#1747440653
nano /etc/nginx/sites-available/zappybot.site
#1747440663
ln -s /etc/nginx/sites-available/zappybot.site /etc/nginx/sites-enabled/
#1747440673
ls -l /etc/nginx/sites-enabled/zappybot.site
#1747440677
rm /etc/nginx/sites-enabled/zappybot.site
#1747440677
ln -s /etc/nginx/sites-available/zappybot.site /etc/nginx/sites-enabled/
#1747440682
nginx -t
#1747440687
systemctl reload nginx
#1747440719
ls -l /etc/nginx/sites-enabled/
#1747440734
grep 'server_name' /etc/nginx/sites-available/*
#1747440841
rm /etc/nginx/sites-enabled/zappybot-site
#1747440847
rm /etc/nginx/sites-enabled/zappybot.site
#1747440853
nginx -t
#1747440853
systemctl reload nginx
#1747440933
npm install
#1747440936
npm run build
#1747440962
server {
#1747440964
}
#1747440978
nano /etc/nginx/sites-available/zappybot.site
#1747441003
nginx -t
#1747441006
systemctl reload nginx
#1747441892
nano /etc/nginx/sites-available/vendas.zappybot.site
#1747441906
ln -s /etc/nginx/sites-available/vendas.zappybot.site /etc/nginx/sites-enabled/
#1747441909
nginx -t
#1747441909
systemctl reload nginx
#1747441931
ln -s /etc/nginx/sites-available/vendas.zappybot.site /etc/nginx/sites-enabled/
#1747441931
nginx -t
#1747441931
systemctl reload nginx
#1747441982
cd /var/www/vendas.zappybot.site
#1747441982
git clone https://github.com/michaelgomees/Zappysitevendas.git .
#1747441982
npm install
#1747441984
npm run build
#1747442193
nginx -t
#1747442193
systemctl reload nginx
#1747442228
mkdir -p /var/www/vendas.zappybot.site
#1747442228
cd /var/www/vendas.zappybot.site
#1747442228
git clone https://github.com/michaelgomees/Zappysitevendas.git .
#1747442289
npm install
#1747442304
npm run build
#1747442463
nginx -t
#1747442463
systemctl reload nginx
#1747442619
cat /etc/nginx/sites-available/vendas.zappybot.site
#1747442639
root /var/www/vendas-site/dist;
#1747442651
nano /etc/nginx/sites-available/vendas.zappybot.site
#1747442688
nginx -t
#1747442691
systemctl reload nginx
#1747443484
cd /var/www/vendas.zappybot.site
#1747443484
git pull origin main
#1747445443
cd /var/www/vendas.zappybot.site
#1747445443
git pull origin main
#1747445474
npm install      # só por segurança, para garantir dependências atualizadas
#1747445478
npm run build    # isso vai gerar o novo build na pasta dist
#1747603456
cd /home/deploy/zappybot/frontend && rm -rf node_modules/ && rm -rf build/ && npm install --force && npm run build
#1747604542
cd /var/www/vendas.zappybot.site
#1747604549
git pull
#1747604570
npm install 
#1747604575
npm run build 
#1747604595
systemctl reload nginx
#1747604806
cd /var/www/vendas.zappybot.site
#1747604813
git status
#1747604829
git commit -m
#1747604848
git pull origin main
#1747604868
npm install
#1747604871
npm run build
#1747604882
systemctl reload nginx
#1747604958
ls -l /var/www/vendas.zappybot.site/dist
#1747604983
sudo nano /etc/nginx/sites-available/default
#1747604991
sudo nano /etc/nginx/sites-available/vendas.zappybot.site
#1747605029
sudo nginx -t
#1747605029
sudo systemctl reload nginx
#1747605124
cd /var/www/vendas.zappybot.site
#1747605127
git pull origin main
#1747605142
npm install
#1747605146
npm run build
#1747605155
sudo systemctl reload nginx
#1747617991
git init
#1747617991
git remote add origin https://github.com/michaelgomees/Zappysitevendas.git
#1747617991
git pull origin main
#1747618070
ssh root@173.249.0.135
#1747618159
cd /var/www/vendas.zappybot.site
#1747618162
git init
#1747618162
git remote add origin https://github.com/michaelgomees/Zappysitevendas.git
#1747618162
git pull origin main
#1747618174
cd /var/www/vendas.zappybot.site
#1747618174
git pull origin main
#1747618217
ssh-keygen -t rsa -b 4096 -C "deploy@zappy"
#1747618373
ssh root@173.249.0.135
#1747618389
mkdir -p ~/.ssh
#1747618389
nano ~/.ssh/authorized_keys
#1747618403
chmod 600 ~/.ssh/authorized_keys
#1747618403
chmod 700 ~/.ssh
#1747618407
ssh root@173.249.0.135
#1747618421
ssh root@173.249.0.135
#1747618464
npm install      # se tiver novas dependências
#1747618466
npm run build    # ou outro comando de build
#1747618559
cd /var/www/zappysitevendas && git pull origin main && npm install && npm run build && pm2 restart all
#1747618568
cd /var/www
#1747618568
git clone https://github.com/michaelgomees/Zappysitevendas.git
#1747618572
cd /var/www/Zappysitevendas && git pull origin main && npm install && npm run build && pm2 restart all
#1747618640
pm2 restart zappysitevendas
#1747618645
pm2 restart all
#1747618658
pm2 start npm --name zappysitevendas -- run start
#1747618678
pm2 delete 0
#1747618685
pm2 list
#1747618694
m2 logs zappysitevendas --lines 20
#1747618700
cat package.json | grep -A 5 '"scripts"'
#1747618714
pm2 logs zappysitevendas --lines 20
#1747618728
"scripts": {
#1747618730
}
#1747618738
pm2 delete zappysitevendas  # para limpar processos antigos
#1747618738
pm2 start npm --name zappysitevendas -- run start
#1747618896
pm2 delete zappysitevendas
#1747618896
pm2 start npm --name zappysitevendas -- run start
#1747618896
pm2 logs zappysitevendas --lines 20
#1747618986
rm -rf node_modules package-lock.json
#1747618993
npm install
#1747619036
rm -rf node_modules package-lock.json
#1747619036
npm install
#1747619059
npm run lint
#1747619063
npm run build
#1747619073
npm run dev
#1747619084
npm run lint
#1747619089
npm run preview
#1747619106
git status
#1747619112
git add .
#1747619118
git commit -m "Descrição breve do que foi alterado"
#1747619124
git push origin main
#1747619187
git add .
#1747619187
git commit -m "Mensagem explicando as alterações"
#1747619187
git push origin main
#1747619307
rm -rf /var/www/Zappysitevendas
#1747619311
cd /var/www
#1747619311
git clone https://github.com/michaelgomees/Zappysitevendas.git
#1747619311
cd Zappysitevendas
#1747619315
npm install
#1747619327
npm run build
#1747619338
sudo systemctl restart nginx
#1747619359
sudo nano /etc/nginx/sites-available/zappysitevendas
#1747619370
sudo ln -s /etc/nginx/sites-available/zappysitevendas /etc/nginx/sites-enabled/
#1747619374
sudo nginx -t
#1747619380
sudo systemctl restart nginx
#1747620186
cd /var/www/vendas.zappybot.site
#1747620192
git remote -v
#1747620208
git pull origin main
#1747620221
git add .
#1747620221
git commit -m "atualização"
#1747620221
git push origin main
#1747620242
git add .
#1747620242
git commit -m "atualização"
#1747620242
git push origin main
#1747620251
git add .
#1747620251
git commit -m "atualização"
#1747620251
git push origin main
#1747620263
cd /var/www/vendas.zappybot.site
#1747620267
git pull origin main
#1747620676
sudo chmod -R 755 /var/www/vendas.zappybot.site
#1747620677
sudo chown -R www-data:www-data /var/www/vendas.zappybot.site
#1747620693
sudo tail -n 30 /var/log/nginx/error.log
#1747620851
ls /etc/nginx/sites-enabled/
#1747620859
sudo nano /etc/nginx/sites-available/vendas.zappybot.site
#1747620888
sudo ln -s /etc/nginx/sites-available/vendas.zappybot.site /etc/nginx/sites-enabled/
#1747620893
sudo nginx -t
#1747620907
sudo certbot certificates
#1747620923
sudo certbot certonly --nginx -d vendas.zappybot.site
#1747620939
sudo nano /etc/nginx/sites-enabled/vendas.zappybot.site
#1747620980
sudo nginx -t
#1747620990
sudo certbot --nginx -d vendas.zappybot.site
#1747621001
sudo nano /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621039
sudo nginx -t
#1747621042
sudo systemctl reload nginx
#1747621047
sudo certbot --nginx -d vendas.zappybot.site
#1747621069
sudo nginx -t
#1747621069
sudo systemctl reload nginx
#1747621178
sudo ss -tlnp | grep nginx
#1747621191
curl -I http://localhost
#1747621191
curl -I https://localhost
#1747621203
curl -I https://vendas.zappybot.site
#1747621226
curl -I https://vendas.zappybot.site/
#1747621231
cat /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621255
sudo nano /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621319
sudo nginx -t
#1747621322
sudo systemctl reload nginx
#1747621325
curl -I http://vendas.zappybot.site
#1747621326
curl -I https://vendas.zappybot.site
#1747621337
ls -l /var/www/vendas
#1747621364
ls -l /var/www/vendas.zappybot.site
#1747621374
root /var/www/vendas.zappybot.site;
#1747621395
sudo nano /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621439
sudo systemctl reload nginx
#1747621449
sudo systemctl status nginx
#1747621460
curl -I https://vendas.zappybot.site
#1747621519
sudo rm -rf /var/www/vendas.zappybot.site/*
#1747621528
cd /var/www
#1747621528
sudo git clone https://github.com/usuario/repositorio.git vendas.zappybot.site
#1747621539
sudo rm -rf /var/www/vendas.zappybot.site/*
#1747621539
sudo rm -rf /var/www/vendas.zappybot.site/.* 2>/dev/null
#1747621543
ls -la /var/www/vendas.zappybot.site
#1747621551
cd /var/www
#1747621551
sudo git clone https://github.com/usuario/repositorio.git vendas.zappybot.site
#1747621595
sudo git clone https://github.com/michaelgomees/Zappysitevendas.git vendas.zappybot.site
#1747621607
sudo systemctl reload nginx
#1747621609
curl -I https://vendas.zappybot.site
#1747621645
ls -la /var/www/vendas.zappybot.site/dist/index.html
#1747621651
cd /var/www/vendas.zappybot.site
#1747621651
npm install
#1747621665
npm run build
#1747621697
ls -la /var/www/vendas.zappybot.site/dist/index.html
#1747621709
cd /var/www/vendas.zappybot.site
#1747621709
npm install
#1747621711
npm run build
#1747621722
cat /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621730
root /var/www/vendas.zappybot.site/dist;
#1747621735
sudo nano /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621771
sudo nginx -t
#1747621771
sudo systemctl reload nginx
#1747621792
ls -l /var/www/vendas.zappybot.site/dist/index.html
#1747621806
cat /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621820
sudo nano /etc/nginx/sites-enabled/vendas.zappybot.site
#1747621833
sudo nginx -t
#1747621835
sudo systemctl reload nginx
#1747649772
cd /var/www/vendas.zappybot.site
#1747649772
git pull origin main
#1747649772
npm run build
#1747649784
sudo systemctl reload nginx
#1747649862
git add .
#1747649862
git commit -m "Descreva aqui o que foi alterado"
#1747649869
git push origin main
#1747649879
cd /var/www/vendas.zappybot.site
#1747649880
git pull origin main
#1747649896
npm install
#1747649905
npm run build
#1747649931
git add .
#1747649931
git commit -m "logo e links de contato"
#1747649933
git push origin main
#1747649969
ssh root@173.249.0.135
#1747650006
cd /var/www/vendas.zappybot.site
#1747650013
git pull origin main
#1747650018
npm install 
#1747650022
npm run build 
#1747650033
ls -la /var/www/vendas.zappybot.site/dist/index.html
#1747650055
sudo systemctl reload nginx
#1747650069
cd /var/www/vendas.zappybot.site
#1747650069
git pull origin main
#1747650069
npm run build
#1747650079
sudo systemctl reload nginx
#1747650186
git add .
#1747650186
git commit -m "sua mensagem"
#1747650186
git push origin main
#1747650200
pm2 restart all
#1747650210
cd /var/www/vendas.zappybot.site
#1747650210
git pull origin main
#1747650251
cd /var/www/vendas.zappybot.site
#1747650251
git pull origin main
#1747650251
npm install
#1747650253
npm run build
#1747650262
pm2 restart all
#1747650514
cd /var/www/vendas.zappybot.site
#1747650517
git remote -v
#1747650550
git config --global --add safe.directory /var/www/vendas.zappybot.site
#1747650555
cd /var/www/vendas.zappybot.site
#1747650555
git remote -v
#1747650561
git pull origin main
#1747650561
npm install
#1747650564
npm run build
#1747650599
ls /var/www/vendas.zappybot.site/dist
#1747650611
nano /etc/nginx/sites-available/vendas.zappybot.site
#1747650625
sudo systemctl reload nginx
#1747650703
sudo nano /etc/nginx/sites-available/vendas.zappybot.site
#1747650724
server {
#1747650727
}
#1747650729
sudo nano /etc/nginx/sites-available/vendas.zappybot.site
