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

### 3. Настройка окружения

Создать `.env` файл в корне проекта (пример в `.env.example`):
```bash
cp .env.example .env
nano .env  # заполнить переменные (PORT, DATABASE_URL, ключи и т.д.)
```

Запустить через PM2:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup  # выполнить команду которую выведет этот скрипт
```

### 4. Nginx

Настроить реверс-прокси на порт из `.env` (`PORT`) и SSL через certbot.

---

## Локальная разработка

### 1. Корень проекта
```bash
npm install
cp .env.example .env       # настроить переменные окружения
npm run dev                # Vite на порту 5173
```

### 2. CMS (Strapi)
```bash
npm run setup:cms          # установить зависимости CMS
npm run dev:cms            # Strapi на порту PORT из .env
```

> Фронт доступен на `http://localhost:5173` (проксирует API на порт из `.env`)
> API и админка CMS: `http://localhost:<PORT>/admin`
