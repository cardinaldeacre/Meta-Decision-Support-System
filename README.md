# Meta-DSS

A web-based Decision Support System (DSS) that helps users make decisions using various analytical methods like SAW and AHP.

## About the Project

This project is built as a platform for data-driven case studies and decision-making. Developed with a full-stack approach that focuses on collaboration and learning.

## Technologies Used

* **Backend**: Node.js, Express.js
* **Database**: MySQL
* **Database Migration & ORM**: Knex.js

## Local Installation Guide

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

Open your terminal and clone the repository from GitHub:

```bash
git clone https://github.com/cardinaldeacre/Meta-Decision-Support-System.git
```

### 2. Install Dependencies

Install all the Node.js packages required by the project:

```bash
npm install
```

### 3. Database Configuration

Create a new file in the root directory of the project named .env.

Fill the file with your MySQL database connection details. Adjust the settings to match your local environment.

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=metadss_db
```

### 4. Run Database Migrations

After installing Knex.js and configuring the database, run the migrations to create the necessary tables:

```bash
npx knex migrate:latest
```

### 5. Run the Server

To start the backend server, use the following command:

```bash
npm run dev
```

This will start the server at http://localhost:3000. The server will automatically restart on code changes by nodemon.
