
# Crypto Investment Bank Web App

## Project Summary
This project is a full-stack crypto investment banking demo application. It uses HTML, CSS, and JavaScript for the frontend, Node.js and Express for the backend, Sequelize as the ORM, and MySQL as the database.

The application allows users to:
- Register accounts
- Login using a MySQL database
- View investment balances stored in MySQL
- Connect a MetaMask wallet
- Simulate crypto deposits and withdrawals
- Logout from the application

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Sequelize
- MySQL
- MetaMask
- GitHub

## Features
- User registration
- User login
- MySQL database integration
- Sequelize ORM
- Investment balance display
- MetaMask wallet connection
- Demo transaction system
- Dark mode UI

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/duran2003/crypto-bank-app.git)

2. Open the project folder
cd crypto-bank-app
3. Install dependencies
npm install
4. Create the MySQL database

Open MySQL Workbench and run:

CREATE DATABASE crypto_bank;
5. Update MySQL password

Open server.js and update:

const sequelize = new Sequelize(
    "crypto_bank",
    "root",
    "YOUR_MYSQL_PASSWORD",

Replace "YOUR_MYSQL_PASSWORD" with your own MySQL password.

6. Start the server
node server.js

7. Open the website

Go to:

http://localhost:3000


Notes

GitHub Pages can host the frontend only. The full application requires Node.js, Express, Sequelize, and MySQL to run locally.
