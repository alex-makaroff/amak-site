## Деплой на сервер

### 1. Корень проекта `/portfolio`

Установить зависимости и собрать проект:
```bash
npm install
npm run build
```
> `npm run build` автоматически установит зависимости в `/cms` и соберёт Strapi

### 2. База данных

Создать БД (если ещё не создана):
```bash
psql -U postgres -c "CREATE DATABASE portfolio;"
```

### 3. Папка `/cms`

Создать `.env` файл (пример в `cms/.env.example`):
```bash
cp .env.example .env
nano .env  # заполнить переменные
```

Запустить через PM2:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup  # выполнить команду которую выведет этот скрипт
```

### 4. Nginx

Настроить реверс-прокси на порт `5000` и SSL через certbot.
Конфиг выше в этом чате.

---

## Локальная разработка

### 1. Корень проекта
```bash
npm install
npm run dev  # Vite на порту 5173
```

### 2. Папка `/cms`
```bash
# Создать cms/.env (см. пример выше в чате)
npm install --legacy-peer-deps
npm run develop  # Strapi на порту 5000
```

> Фронт и API доступны на `http://localhost:5000`
> Админка CMS: `http://localhost:5000/admin`