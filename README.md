# Get Me A Chai ☕

A full-stack creator-support platform inspired by Buy Me a Coffee, where users can create their own profile and receive support from others through chai contributions.

The application combines authentication, dynamic user pages, MongoDB, and Razorpay payment integration to provide a complete end-to-end experience.

---

## 🌐 Project Overview

Get Me A Chai allows creators to have a personalized page where supporters can contribute money as a way of buying them a chai.

Each user has a unique username-based page where visitors can view their profile and make a contribution through the integrated payment system.

The project was built to practice and demonstrate real-world full-stack application development, including authentication, database operations, API routes, dynamic routing, and online payments.

---

## ✨ Key Features

- GitHub OAuth authentication
- User-specific profile pages
- Dynamic username-based routes
- Creator dashboard
- MongoDB database integration
- User and payment data management
- Razorpay payment integration
- Payment order creation
- Razorpay Checkout
- Payment response handling
- User-specific payment configuration
- API routes for server-side operations
- Invalid username handling
- Responsive user interface

---

## 🛠️ Tech Stack

### Frontend

- **Next.js**
- **React**
- **Tailwind CSS**
- **JavaScript**

### Backend & Database

- **Next.js API Routes**
- **Node.js**
- **MongoDB**
- **Mongoose**

### Authentication & Payments

- **NextAuth**
- **GitHub OAuth**
- **Razorpay**

### Development Tools

- **Git**
- **GitHub**
- **VS Code**
- **Vercel**

---

## 🗄️ Database

MongoDB is used as the application's database, with Mongoose used to define and interact with the data models.

The database stores information related to:

- Users
- User profiles
- User-specific payment configuration
- Payment records

The MongoDB connection is configured using environment variables rather than hard-coded credentials.

---

## 🔐 Authentication

The application uses **NextAuth** with **GitHub OAuth** for user authentication.

After signing in, users can access their personalized application experience and manage their creator profile.

---

## 💳 Payment Integration

Razorpay is integrated to handle creator contributions.

The payment flow includes:

1. Supporter visits a creator's page.
2. Supporter enters the contribution amount.
3. The application creates a Razorpay payment order.
4. Razorpay Checkout is opened.
5. The payment response is handled by the application.
6. Payment information is stored for the creator.

The application also supports user-specific Razorpay configuration.

---

## 🔗 Dynamic User Pages

Each creator has a unique username-based page.

For example:

```text
/username
```

The application checks whether the requested username exists and displays the corresponding creator page.

Invalid usernames are handled using Next.js `notFound()` functionality.

---

## 📂 Project Structure

```text
Get-Me-A-Chai/
│
├── app/
│   ├── api/
│   │   ├── ...
│   │   └── ...
│   │
│   ├── [username]/
│   ├── dashboard/
│   ├── login/
│   ├── layout.js
│   ├── page.js
│   └── ...
│
├── components/
│   └── Reusable React components
│
├── models/
│   ├── User.js
│   └── Payment.js
│
├── lib/
│   └── Database connection
│
├── public/
│   └── Static assets
│
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

> The exact folder structure may vary depending on the current version of the project.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd Get-Me-A-Chai
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root.

Add the required configuration for:

```env
MONGODB_URI=your_mongodb_connection_string

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

NEXTAUTH_SECRET=your_nextauth_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> **Important:** The environment variable names above should match the names used in your actual project. Never commit `.env.local` or any API keys, OAuth secrets, database credentials, or payment credentials to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🎯 Development Highlights

### Authentication

Implemented GitHub OAuth authentication using NextAuth to provide a secure sign-in experience.

### MongoDB Integration

Connected the application to MongoDB using Mongoose for persistent user and payment data.

### Dynamic Routing

Implemented username-based dynamic routes so each creator can have a personalized page.

### RESTful API Operations

Created Next.js API routes to handle server-side operations and communicate with the database and payment service.

### Payment Processing

Integrated Razorpay to create payment orders and process creator contributions.

### User-Specific Configuration

Implemented support for user-specific Razorpay payment configuration, allowing creators to connect their payment details.

### Error Handling

Handled invalid usernames and unavailable creator pages using Next.js routing and `notFound()`.

---

## 🧠 What I Learned

- Building a full-stack application with Next.js
- Integrating MongoDB with Mongoose
- Implementing GitHub OAuth authentication
- Working with NextAuth
- Creating API routes in Next.js
- Building dynamic username-based routes
- Integrating Razorpay payments
- Handling payment-related server-side operations
- Managing sensitive credentials with environment variables
- Structuring a database-driven application

---

## 👨‍💻 Developer

**Alfaz**

Full-Stack JavaScript Developer

### Technologies

Next.js · React · JavaScript · Tailwind CSS · MongoDB · Mongoose · NextAuth · Razorpay

---

## 📄 License

This project was developed as a full-stack portfolio project for learning and demonstrating modern web development concepts.