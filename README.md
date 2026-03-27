# Bella Style – eCommerce Website

**Bella Style** is a modern and responsive eCommerce website built to showcase fashion products with a clean user interface and smooth user experience. It now includes **JWT-based authentication** for secure user login and registration.

---

##  Features

* 🛒 Product listing page (Shop)
* 🔍 Search functionality
* ❤️ Wishlist feature
* 🛍️ Cart system UI
* 🔐 **JWT Authentication (Login & Signup)**
* 👤 User session handling
* 📱 Fully responsive design (Mobile, Tablet, Desktop)
* 🍔 Mobile hamburger menu
* 🎥 Hero section with video/banner
* 🖼️ Product categories section
* 🧭 Smooth navigation between pages

---

## 🔐 Authentication (JWT)

This project uses **JSON Web Tokens (JWT)** for secure authentication.

### ✔️ Implemented Features:

* User Signup
* User Login
* Token generation on login
* Token storage (LocalStorage / Cookies)
* Protected user sessions

### ⚙️ How It Works:

1. User signs up or logs in
2. Server generates a JWT token
3. Token is sent to the client
4. Client stores token (e.g., LocalStorage)
5. Token is used to authenticate future requests

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript
* **Backend:** (Add yours — e.g., Node.js / Express)
* **Authentication:** JWT (JSON Web Tokens)

---

## 📂 Project Structure

```id="p9s8dj"
bella-style/
│
├── frontend/
│   ├── index.html
│   ├── shop.html
│   ├── css/
│   ├── js/
│
├── backend/
│   ├── routes/
│   │   └── auth.js
│   ├── controllers/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash id="l1q8dm"
git clone https://github.com/mipresh/bella-style.git
```

### 2. Navigate into the project

```bash id="z4m8pw"
cd bella-style
```

### 3. Install backend dependencies

```bash id="y2a8sd"
cd backend
npm install
```

### 4. Run backend server

```bash id="k3d9pl"
npm run dev
```

### 5. Run frontend

Open `index.html` in your browser
(or run with Live Server)

---

## 🔑 Example API Routes

* `POST /api/auth/signup` → Register user
* `POST /api/auth/login` → Login user
* `GET /api/user/profile` → Protected route (requires token)

---

## 🌐 Live Demo

👉 [(Add your deployed link here)](https://mipresh.github.io/Bella-Style/)

---


## 💡 Key Highlights

* Clean and modern **fashion brand UI**
* Secure **JWT authentication system**
* Strong focus on **mobile responsiveness**
* Structured for **scalability (frontend + backend)**

---

## 🚀 Future Improvements
* catalogue and prices
* 🧾 Checkout system
* 💳 Payment integration
* 🔒 Refresh tokens & advanced auth security
* 📦 Product filtering & sorting
* ⭐ Product reviews & ratings
* 📊 Admin dashboard

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Your Name**
GitHub: https://github.com/your-username

---

## 💖 Acknowledgements

* Inspired by modern fashion eCommerce platforms
* Built with passion for frontend & backend development

---
