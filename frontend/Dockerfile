# Используем официальный образ Node.js
FROM node:22

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Собираем проект Vue.js
RUN npm run build

# Открываем порт 8080
EXPOSE 8080

# Запускаем сервер разработки
CMD ["npm", "run", "dev"]