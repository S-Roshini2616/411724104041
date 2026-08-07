# React + FastAPI + MySQL (Beginner Full Stack Demo)

A simple Full Stack project built for beginners to understand how:

```
React (Frontend)
        ↓
     FastAPI (Backend)
        ↓
      MySQL (Database)
```

work together.

This project is for learning **Frontend → Backend → Database** communication.

---

# Technologies Used

- React (Frontend)
- FastAPI (Backend)
- MySQL (Database)
- SQLAlchemy
- PyMySQL

---

# Project Structure

```
simple-full-stack/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    ├── package.json
    └── ...
```

---

# Prerequisites

Before running this project, install:

- Python 3.10 or later
- Node.js (LTS Version)
- MySQL Server
- MySQL Workbench (Optional)
- VS Code

---

# Step 1 : Clone the Repository

Using Git:

```bash
git clone https://github.com/YOUR_USERNAME/simple-full-stack.git
```

Go inside the project.

```bash
cd simple-full-stack
```

---

# Step 2 : Create Database

Open **MySQL Workbench**.

Create a database.

```sql
CREATE DATABASE school_demo;
```

Use the database.

```sql
USE school_demo;
```

If your project uses SQLAlchemy's

```python
Base.metadata.create_all(bind=engine)
```

then **do not create the table manually**.

FastAPI will create the table automatically.

---

# Step 3 : Configure Database

Open

```
backend/database.py
```

Update the database connection.

Example:

```python
DATABASE_URL = "mysql+pymysql://root:password@localhost/school_demo"
```

Replace

- root
- password

with your own MySQL username and password.

Example:

```python
DATABASE_URL = "mysql+pymysql://root:1234@localhost/school_demo"
```

---

# Step 4 : Open Two Terminals

Open VS Code.

Open **two terminals**.

One terminal is for FastAPI.

One terminal is for React.

---

# Terminal 1 : Backend

Move into backend folder.

```bash
cd backend
```

Install required Python packages.

```bash
pip install fastapi uvicorn sqlalchemy pymysql
```

Start FastAPI.

```bash
uvicorn main:app --reload
```

You should see

```
Uvicorn running on http://127.0.0.1:8000
```

Keep this terminal running.

---

# Terminal 2 : Frontend

Go back to the project folder.

```bash
cd ..
```

Move into frontend.

```bash
cd frontend
```

Install node modules.

```bash
npm install
```

Start React.

```bash
npm run dev
```

You should see something similar to

```
Local: http://localhost:5173
```

Open the URL in your browser.

---

# How to Test

### Step 1

Enter

- Username
- Password

Click

```
Login
```

The data is stored in MySQL.

---

### Step 2

Click

```
Show Users
```

React requests all users from FastAPI.

FastAPI retrieves data from MySQL.

The users are displayed on the page.

---

# Project Flow

```
React
   │
   │ POST /login
   ▼
FastAPI
   │
   │ INSERT
   ▼
MySQL
```

To display users

```
React
   │
   │ GET /users
   ▼
FastAPI
   │
   │ SELECT
   ▼
MySQL
   │
   ▼
React
```

---

# API Endpoints

## Insert User

```
POST /login
```

Example Request

```json
{
    "username": "Kiran",
    "password": "1234"
}
```

---

## Get All Users

```
GET /users
```

---

# Common Errors

## Error

```
ModuleNotFoundError
```

Solution

```bash
pip install -r requirements.txt
```

---

## Error

```
Access denied for user
```

Solution

Check your MySQL username and password in

```
backend/database.py
```

---

## Error

```
Failed to fetch
```

Solution

Make sure FastAPI is running.

```
uvicorn main:app --reload
```

---

## Error

```
npm command not found
```

Solution

Install Node.js (LTS Version).

---

# Learning Outcome

After completing this project, you will understand:

- React sends data to FastAPI.
- FastAPI receives the request.
- FastAPI stores data in MySQL.
- React requests data from FastAPI.
- FastAPI retrieves data from MySQL.
- React displays the data.

---

# Author

Created for beginners to understand Full Stack Web Development using:

- React
- FastAPI
- MySQL
