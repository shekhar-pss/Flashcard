# 🎓 Student Management System (Full Stack Project)

A full-stack **Student Management Web Application** built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and Mongoose**. This project allows users to create, view, update, and delete student records along with image upload functionality.

---

# 🚀 Features

## 📌 Core Features

* ➕ Add new student with image upload
* 📋 View all students in card format
* ✏️ Edit student details
* 🗑️ Delete student (with image removal from server)
* 📦 Store data in MongoDB Atlas
* 📁 Upload and store images using Multer

---

## 🎨 UI Features

* Modern card-based UI
* Popup modal form for adding/editing students
* Responsive design (works on mobile & desktop)
* Clean and simple interface

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## File Upload

* Multer

---


# 📁 Folder Structure

```
student-management/
│
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── public/              # frontend yahi hai
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── server.js
│
├── uploads/                 # ✅ images yaha store hoti hain
│
│
├── .env
├── .gitignore
├── package.json
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd student-management
```

---

## 2️⃣ Install dependencies

```
npm install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 4️⃣ Run the server

```
npm start
```

---

## 5️⃣ Open in browser

```
http://localhost:5000
```

---

# 🔌 API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| POST   | /students     | Add new student  |
| GET    | /students     | Get all students |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

---

# 📸 Image Upload System

* Uses **Multer** for handling file uploads
* Images stored in `/uploads` folder
* File path saved in MongoDB
* Image automatically deleted when student is deleted

---

# 🔄 Application Flow

1. User clicks **Create Card**
2. Modal form opens
3. User fills details and uploads image
4. Data sent to backend via API
5. Stored in MongoDB
6. Displayed as card on dashboard

---

# 🧠 Key Learnings

* Full-stack CRUD operations
* REST API development
* MongoDB integration with Mongoose
* File upload handling using Multer
* Frontend-backend communication using Fetch API
* State handling (Add vs Edit mode)

---

# ⚠️ Common Issues & Fixes

### ❌ MongoDB not connecting

✔ Check `.env` file
✔ Ensure correct URI
✔ Allow network access in MongoDB Atlas

---

### ❌ Image not uploading

✔ Check `uploads` folder exists
✔ Ensure multer config is correct

---

### ❌ Duplicate entries on update

✔ Use edit mode logic
✔ Avoid multiple submit handlers

---

### ❌ Image not deleting

✔ Use `fs.unlinkSync()` with correct path
✔ Ensure path uses `process.cwd()`

---

# 🚀 Future Improvements

* 🔐 Authentication (JWT login system)
* ☁️ Cloudinary image upload
* 🔍 Search and filter students
* 🎨 Advanced UI (animations, dark mode)
* 🌐 Deploy to cloud (Render / Vercel)

---

# 🤝 Contribution

Feel free to fork this repository and improve the project. Contributions are welcome!

---

# 📄 License

This project is open-source and free to use.

---

# 💬 Author

Developed by **Shekhar** 🚀

---

# ⭐ Final Note

This project demonstrates a complete **full-stack development workflow** including frontend design, backend APIs, database integration, and file handling — making it a strong project for learning and portfolio use.

---
