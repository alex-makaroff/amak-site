На сервере 77.73.132.128
в папке /opt/node/amak-site
склонирован этот проект.
Обновлять его там можно только через git pull.

Подключиться к серверу по SSH можно
с кредами:
host: 77.73.132.128
user: root
ключ C:\Users\vv\.ssh\id_rsa.ppk или C:\Users\vv\.ssh\id_rsa


Подключись на сервер через SSH 
Обнови проект на сервере:
cd /opt/node/amak-site
git pull

ЗАпускай /opt/node/amak-site/update.js
```
/root/.nvm/versions/node/v22.17.1/bin/node /opt/node/amak-site/update.js
```

Добейся того, чтобы ты мог запустить сайт
(обрати внимание, что использовать для запуска надо ноду /root/.nvm/versions/node/v22.17.1/bin/node)

Цикл таков:
- сделал изменения в локальном проекте
- проверил локально
- закомитил и запушил
- на сервере сделал git pull
- запустил пересборку через /opt/node/amak-site/update.js
- запустил на сервере web-server проекта
- проверил http://amak.site с помощью playwright
- Если что-то не так, прибиваешь процесс на порту 9011 и повторяешь цикл

