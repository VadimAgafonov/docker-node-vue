# Используем офф. образ Node js
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

RUN npm install -g nodemon

RUN npm install -g ts-node

# Копируем исходный код
COPY . .

# Собираем проект
RUN npm run build

# Отркываем порт для сервера
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "run", "dev"]