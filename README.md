# 📚 BookStore — MERN Stack Web Application

A full-stack online bookstore application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse books, sign up, log in, and get in touch via a contact form.

## ✨ Features

- 🔐 User authentication (Signup & Login) with hashed passwords
- 📖 Browse and view book listings with details
- ➕ Add, edit, and delete books
- ✉️ Contact form for user inquiries
- 🎨 Responsive UI styled with Tailwind CSS and DaisyUI
- 🍞 Toast notifications for user feedback

## 🛠️ Tech Stack

**Frontend:**
- React 18 (Vite)
- React Router DOM
- Tailwind CSS + DaisyUI
- React Hook Form
- Axios
- React Hot Toast

**Backend:**
- Node.js + Express.js
- MongoDB with Mongoose (hosted on MongoDB Atlas)
- bcryptjs for password hashing
- dotenv for environment configuration

## 📁 Project Structure

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier works fine)

### 1. Clone the repository

```bash
git clone https://github.com/PriyakumariG/BookStore.git
cd BookStore
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder with the following content:
PORT=4001
MongoDBURI="mongodb+srv://<your-username>:<your-password>@<your-cluster>.mongodb.net/bookstore?appName=Cluster0"


Replace `<your-username>`, `<your-password>`, and `<your-cluster>` with your own MongoDB Atlas credentials.

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:4001`.

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).

## 🔌 API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | `/user/signup`   | Register a new user        |
| POST   | `/user/login`    | Log in an existing user    |
| GET    | `/book`          | Get all books               |
| POST   | `/books`         | Add a new book              |
| GET    | `/getbooks/:id`  | Get a single book by ID    |
| PUT    | `/updatebook/:id`| Update a book by ID        |
| DELETE | `/deleteBook/:id`| Delete a book by ID        |
| POST   | `/contact`       | Submit a contact message   |

## 📝 Environment Variables

The backend requires a `.env` file (not committed to version control for security) with:

| Variable      | Description                          |
|---------------|---------------------------------------|
| `PORT`        | Port for the backend server           |
| `MongoDBURI`  | MongoDB Atlas connection string       |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or issue.

## 👩‍💻 Author

**Priya**
