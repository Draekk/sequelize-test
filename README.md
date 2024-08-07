# sequelize-test

This project is aimed at exploring the basic functionalities of Sequelize, a popular Node.js Object-Relational Mapping (ORM) library for working with SQL databases. In this project, we will create a simple CRUD application for managing users.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Prerequisites

- Node.js (v12.18.3 or later)
- npm (v6.14.6 or later)
- MySQL (v5.7 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Draekk/sequelize-test.git
```

2. Navigate to the project directory:

```bash
cd sequelize-test
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the root directory and add your database credentials:

```py
DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=sequelize_test
DB_DIALECT=your_database_dialect
```

## Usage

1. Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000

## Features

- Create, read, update, and delete (CRUD) operations for users.
- Validation checks for user input.
- Error handling for database operations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
