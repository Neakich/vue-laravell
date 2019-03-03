<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>
<p align="center"><img style="width: 150px" src="https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"></p>

## Frontend environment

> Install [Node](https://nodejs.org/en/).

Install node dependencies
```sh
npm install 
```

# Backend environment
> Install [PHP](http://php.net/downloads.php) 7.1, [MySQL](https://dev.mysql.com/downloads/mysql/) (5.6^) and [Apache](https://httpd.apache.org/)
> Or simple install [OpenServer](https://ospanel.io/).

# Start the project!


  - Create database (called 'db' by default) and set .env params
  ```sh
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=YOUR_DATA_BASE_NAME
    DB_USERNAME=YOUR_NAME
    DB_PASSWORD=YOUR_PASSWORD
```

  - Install composer dependencies
```sh
composer install 
```
  - Run Migrations
  ```sh
npm run dev 
```
  - Run Seeds
```sh
php artisan db:seed --class=UsersTableSeeder 
```
  - Start laravel development server
```sh
php artisan serve --port=3000 
```
  - Run nuxt app
```sh
npm run dev 
```
  - Go to in your browser
```sh
http://localhost:8000 
```