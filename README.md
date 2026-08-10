# GetMeAChai ☕

A full-stack crowdfunding platform that enables developers and content creators to create personalized funding pages and receive financial support from their audience.

## Features

- GitHub OAuth authentication using NextAuth.js
- Creator profiles with customizable usernames, profile pictures, and cover images
- Personalized creator pages using dynamic routing
- Razorpay payment gateway integration
- Custom and predefined payment amounts
- Supporter messages displayed on creator profiles
- Creator dashboard for managing profile and payment settings
- MongoDB database integration using Mongoose
- Responsive UI built with Tailwind CSS
- Server-side operations using Next.js Server Actions

## Tech Stack

**Frontend**
- Next.js
- React
- JavaScript
- Tailwind CSS

**Backend & Database**
- Next.js Server Actions
- Node.js
- MongoDB
- Mongoose

**Authentication & Payments**
- NextAuth.js
- GitHub OAuth
- Razorpay

## Application Flow

1. Creators sign in using GitHub.
2. Creators configure their profile through the dashboard.
3. Each creator gets a unique public funding page.
4. Supporters can enter their name, message, and contribution amount.
5. Razorpay processes the payment.
6. Successful contributions are displayed on the creator's page.

## Project Structure

```text
app/
├── about/
├── api/
│   ├── auth/
│   └── razorpay/
├── dashboard/
├── login/
├── [username]/
└── page.js

actions/
└── useractions.js

components/
├── Dashboard.js
├── PaymentPage.js
├── Navbar.js
└── Footer.js

db/
└── connectDb.js

models/
├── User.js
└── Payment.js