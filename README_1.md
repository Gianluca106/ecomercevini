# VSCommerce – Wine E-commerce Platform

Full-stack e-commerce platform for selling wine online, built as a project for the **Internet Technologies** university course. It supports product browsing and purchasing, along with a complete admin panel for managing products, orders, and users.

## Overview

The goal of this project is to bring the experience of a wine shop into a digital storefront: users can browse the catalog and add products to their cart even without an account, then complete checkout (shipping and payment) once they log in. An admin role manages the catalog, orders, and users, and can view sales statistics.

## Key Features

**User side**
- Browse and search the product catalog, no account required
- Sign up, sign in, and password recovery
- Shopping cart with quantity management
- Checkout with shipping address (including map-based location)
- Choice of payment method (PayPal or Stripe) and order confirmation
- Order history and product reviews

**Admin side**
- Dashboard with sales charts
- Product management (create, edit, stock levels)
- User management and permissions (including creating additional admins)
- Order management and tracking

## Tech Stack

- **Frontend:** React.js, JavaScript, Bootstrap / React-Bootstrap, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Token (JWT), bcrypt.js
- **Payments:** PayPal, Stripe
- **Shipping address map:** Google Maps API
- **Sales charts:** react-google-charts
- **Product image uploads:** Cloudinary, Multer

## Project Structure

```
ecomercevini/
├── backend/          # REST API (Express), MongoDB models, authentication
│   ├── models/       # User, product, and order schemas
│   └── routes/       # Endpoints for users, products, orders, uploads
└── frontend/         # React interface
    └── src/
        ├── components/
        └── screens/  # Pages: home, product, cart, checkout, admin area...
```

## Running Locally

**1. Database**
Create a database on MongoDB Atlas (or a local instance) and add the connection string to the backend `.env` file:
```
MONGODB_URI=mongodb+srv://<your-connection-string>
```

**2. Backend**
```
cd backend
npm install
npm start
```
The terminal will confirm the connection to MongoDB.

**3. Frontend**
In a new terminal:
```
cd frontend
npm install
npm start
```

**4. Seed the database with sample data**
Visit `http://localhost:4000/api/seed`

**5. View the site**
`http://localhost:3000`

---

> Built on top of a base MERN e-commerce architecture, customized and extended for this specific use case (wine catalog, checkout flow, admin panel).
