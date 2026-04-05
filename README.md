# 🛒 E-Commerce Web Application (MERN Stack)

## 📌 Project Overview

The **E-Commerce Web Application** is a full-stack web platform developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
It allows customers to browse products, add items to a cart, and place orders, while administrators can manage products, orders, and users through a dedicated admin panel.

This system demonstrates modern web development practices including RESTful APIs, authentication, state management, and responsive UI design.

---

# 🧩 System Architecture

```
E-Commerce App
│
├── frontend (Customer Interface)
├── admin (Admin Dashboard)
└── backend (API & Database)
```

---

# ⚙️ Technologies Used

## Frontend

* React.js
* Vite
* React Router
* Axios
* CSS / Tailwind / Bootstrap

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer (File Upload)

## Tools

* Git & GitHub
* Postman
* Vercel / Render
* Nodemon

---

# 📂 Project Structure

```
ecommerce-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Features

## Customer Features

* User Registration
* User Login
* Browse Products
* Search Products
* Add to Cart
* Remove from Cart
* Checkout System
* Order Placement
* View Order History

## Admin Features

* Admin Login
* Add Product
* Update Product
* Delete Product
* Manage Orders
* Manage Users
* Upload Product Images

---

# 🔐 Authentication

The system uses **JWT (JSON Web Token)** for secure authentication.

## Flow

1. User logs in
2. Server generates JWT
3. Token stored in local storage
4. Token sent with API requests
5. Server validates token

---

# 🗄️ Database Models

## User Model

```js
{
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean
}
```

---

## Product Model

```js
{
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  stock: Number
}
```

---

## Order Model

```js
{
  userId: ObjectId,
  products: Array,
  totalAmount: Number,
  status: String,
  date: Date
}
```

---

# 🌐 API Endpoints

## User Routes

```
POST /api/users/register
POST /api/users/login
GET /api/users/profile
```

---

## Product Routes

```
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

---

## Cart Routes

```
POST /api/cart/add
GET /api/cart
DELETE /api/cart/remove
```

---

## Order Routes

```
POST /api/orders
GET /api/orders
PUT /api/orders/status
```

---

# 🖥️ Installation Guide

## Step 1 — Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

---

## Step 2 — Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Step 3 — Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## Step 4 — Install Admin Dependencies

```bash
cd ../admin
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside **backend**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# ▶️ Running the Application

## Start Backend

```bash
cd backend
npm run dev
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

## Start Admin Panel

```bash
cd admin
npm run dev
```

---

# 🌍 Default URLs

```
Frontend:
http://localhost:5173

Admin Panel:
http://localhost:5174

Backend API:
http://localhost:5000
```

---

# 📸 Screens (Example)

## Home Page

* Product Listing
* Categories
* Navigation Bar

## Product Page

* Product Details
* Add to Cart Button

## Admin Dashboard

* Product Management
* Order Management
* User Management

---

# 🔄 System Workflow

```
User → Frontend → API → Database
           ↑
        Response
```

---

# 🛡️ Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* Input Validation
* Error Handling

---

# 📈 Future Enhancements

* Payment Gateway Integration
* Email Notifications
* Product Reviews
* Wishlist Feature
* Admin Analytics Dashboard
* Mobile Application

---

# 🧪 Testing

Testing tools used:

* Postman
* Browser Testing
* API Testing

---

# 👨‍💻 Author

Ahamedh Farajeen
BSc in Software Engineer
SLIIT

---

# 📄 License

This project is developed for **educational purposes**.

---

# ✅ Conclusion

The **MERN E-Commerce Web Application** demonstrates a complete full-stack system that integrates frontend user interfaces, backend APIs, and database management.
It provides real-world functionality such as authentication, product management, and order processing, making it suitable for academic submissions and portfolio projects.
