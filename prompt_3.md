Подключиться к серверу по SSH можно 
с кредами:
host: 77.73.132.128
user: root
ключ C:\Users\vv\.ssh\id_rsa.ppk или C:\Users\vv\.ssh\id_rsa

Подключись на сервер через SSH 

Размести на сервере в ппке /opt/node/currency-service
файл deploy/NGINX/sites-enabled/amak.site.conf

Проверь конфигурацию nginx
Если все нормально, перезапусти nginx

Размести в папке /opt/node/currency-service файл test.local.js
В этом файле должен быть минимальный web-сервер на express,
который работает по порту 9011 и который выдает при обращению к конрню "HELLO!"
Запусти этот веб-сервер.
И проверь, что он доступен по адресу http://amak.site
