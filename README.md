# Employee Dashboard

A full-stack Employee Management Dashboard built with React, Node.js, Express, and MongoDB featuring JWT authentication, role-based access control, protected routes, and scalable dashboard architecture.

---

## 🚀 Features

### 🔐 Authentication & Security
- JWT-based authentication
- Secure login & registration
- Protected frontend routes
- Role-based access control (RBAC)
- Token validation middleware
- Secure API authorization

### 👥 Employee Management
- Add employees
- Edit employee details
- Delete employees
- Employee profile management
- Department-based organization

### 📊 Dashboard System
- Admin dashboard
- Employee dashboard
- Dynamic dashboard rendering based on roles
- Responsive analytics UI

### ⚡ Frontend Features
- Reusable React components
- API integration using Axios
- Responsive layouts
- Modern UI architecture
- State management

### 🛠️ Backend Features
- REST API architecture
- Express middleware structure
- MongoDB database integration
- Error handling middleware
- Authentication middleware
- Modular backend architecture

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- JavaScript / TypeScript
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Token)
- bcrypt

## Tools & Platforms
- Git
- GitHub
- npm

---

# 📂 Project Structure

```bash
employee_dashboard/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# 🔑 Authentication Flow

```txt
User Login
    ↓
JWT Token Generated
    ↓
Token Stored
    ↓
Protected Routes Access
    ↓
Role-Based Authorization
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ArshanaTheUI/employee_dashboard.git
```

```bash
cd employee_dashboard
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

Open another terminal:

```bash
cd backend
npm install
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔒 Environment Variables

Create `.env` inside backend:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

# 🎯 Learning Outcomes

This project helped me learn:

- Full-stack application architecture
- JWT authentication
- Role-based authorization
- Protected routes
- REST API development
- MongoDB integration
- Frontend/backend communication
- React component architecture
- Backend middleware patterns
- Git & GitHub workflow

---

# 🚀 Future Improvements

- Refresh tokens
- Email verification
- Password reset flow
- Docker support
- Unit testing
- CI/CD pipeline
- Dark mode
- Charts & analytics
- WebSocket notifications

---

# 📸 Screenshots

Add screenshots here.

Example:

```md
![Dashboard](./screenshots/dashboard.png)
```

---

# 👨‍💻 Author

Made with ❤️ by Arshana

GitHub:
https://github.com/ArshanaTheUI