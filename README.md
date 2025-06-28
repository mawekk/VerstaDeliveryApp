# VerstaDeliveryApp

![GitHub Actions CI](https://github.com/mawekk/VerstaDeliveryApp/actions/workflows/ci.yml/badge.svg)

Тестовое задание на вакансию разработчика C#

## Описание задачи

Реализовать простое Web-приложение для приемки заказа на доставку со следующим функционалом:

1. Форма создания нового заказа (все поля обязательны для заполнения):
    * Город отправителя
    * Адрес отправителя
    * Город получателя
    * Адрес получателя
    * Вес груза
    * Дата забора груза

2. Форма отображения списка заказов: все созданные заказы должны отображаться в отдельной форме. Помимо полей, введенных
   пользователем при создании заказа, должен отображаться автоматически сгенерированный номер заказа.

3. Форма просмотра созданного заказа в режиме чтения. Должна открываться при клике на заказ в списке заказов.
   
### Технологии
* ASP.NET 9 
* React.JS
* Entity Framework
* PostgreSQL

## Инструкция по запуску

### Локальный запуск

1. Клонируйте репозиторий:
   ```shell
   git clone https://github.com/mawekk/VerstaDeliveryApp.git
   ```

2. Подключитесь к PostgreSQL и введите пароль (по умолчанию `postgres`):
   ```shell
   psql -U postgres
   ```
3. Создайте базу данных `delivery_db`, если она еще не создана:
   ```shell
   CREATE DATABASE delivery_db;
   ```
4. Подключитесь к базе данных:
   ```shell
   \c delivery_db
   ```
5. Выполните скрипт для инициализации:
   ```shell
   \i init_db.sql
   ```
6. Закройте сессию PostgreSQL:
   ```shell
   \q
   ```
7. Соберите и запустите сервер:
   ```shell
   cd VerstaDeliveryApp.API
   dotnet run
   ```
8. Запустите клиент:
   ```shell
   cd ../versta-delivery-app-frontend
   npm install
   npm run dev
   ```

## Сборка и запуск в Docker

1. Клонируйте репозиторий:
   ```shell
   git clone https://github.com/mawekk/VerstaDeliveryApp.git
   ```
2. Соберите Docker-образы:
   ```shell
   docker-compose build
   ```
3. Запустите контейнеры:
   ```shell
   docker-compose up -d
   ```
4. Для остановки контейнеров выполните следующую команду:
   ```shell
   docker-compose down
   ```
