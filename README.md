
<!-- ══════════════════════════════════════════════════════════════════ -->
<!--              AMAZON CLONE — Full Stack eCommerce Platform        -->
<!-- ══════════════════════════════════════════════════════════════════ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:131921,50:FF9900,100:131921&height=200&section=header&text=Amazon%20Clone&fontSize=60&fontColor=FFFFFF&fontAlignY=38&desc=Full%20Stack%20eCommerce%20Platform%20with%20Complete%20CRUD%20and%20Auth&descSize=16&descAlignY=58&animation=fadeIn" width="100%"/>

<img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Status"/>
<img src="https://img.shields.io/badge/Version-1.0.0-FF9900?style=for-the-badge" alt="Version"/>
<img src="https://img.shields.io/badge/License-MIT-131921?style=for-the-badge" alt="License"/>
<img src="https://img.shields.io/badge/PRs-Welcome-00C853?style=for-the-badge" alt="PRs Welcome"/>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=20&duration=3000&pause=1000&color=FF9900&center=true&vCenter=true&width=800&lines=Full+Stack+Amazon+Clone+with+React+%2B+Node.js;Complete+User+Authentication+%28JWT%29;Product+CRUD+%7C+Cart+%7C+Orders+%7C+Payments;Admin+Dashboard+%7C+Seller+Panel+%7C+Reviews;Real-time+Search+%7C+Filters+%7C+Wishlist" alt="Typing SVG"/>

<br/><br/>

<a href="#-demo">View Demo</a> •
<a href="#-features">Features</a> •
<a href="#-tech-stack">Tech Stack</a> •
<a href="#-installation">Installation</a> •
<a href="#-api-docs">API Docs</a>

</div>

---

## 📸 Project Overview

> A production-grade, full-featured **Amazon Clone** built from scratch — covering the complete eCommerce lifecycle from user registration to order delivery tracking. Every feature is fully functional with a real database, JWT authentication, payment integration, and an admin control panel.

```
🛒  Browse Products       →   Search, Filter, Sort, Categories
👤  User Auth             →   Register, Login, JWT, Google OAuth
🛍️  Shopping Flow         →   Cart, Wishlist, Checkout, Payment
📦  Order Management      →   Track, Cancel, Return, History
⭐  Review System         →   Ratings, Comments, Verified Purchase
🛠️  Admin Dashboard       →   Products, Orders, Users, Analytics
```

---

## ✨ Features

### 👤 User Authentication and Management
- User **Registration and Login** with email and password
- **JWT Token** based secure authentication with refresh tokens
- **Google OAuth 2.0** social login
- Email **OTP Verification** on signup
- **Forgot Password** with email reset link
- **Profile Management** — update name, email, avatar, phone
- **Address Book** — add, edit, delete multiple delivery addresses
- **Session Management** — logout from all devices

### 🛍️ Product System (Full CRUD)
- **Browse All Products** with pagination
- **Product Detail Page** with image gallery, size/color variants
- **Advanced Search** — real-time search with debounce
- **Multi-level Filters** — category, brand, price range, rating, availability
- **Sort Options** — price low/high, newest, best seller, top rated
- **Product Variants** — size, color, quantity selector
- **Stock Indicator** — in stock, limited stock, out of stock
- **Related Products** and "Customers also bought" section
- **Recently Viewed** products tracking

### 🛒 Cart and Checkout
- **Add to Cart** with quantity management
- **Cart Persistence** — cart saved across sessions
- **Price Breakdown** — subtotal, discount, tax, delivery charge
- **Apply Coupon Codes** with validation
- **Save for Later** — move items between cart and saved list
- **Checkout Flow** — address → payment → confirm
- **Order Summary** page before placing order
- **Multiple Payment Methods:**
  - Credit / Debit Card (Stripe)
  - Cash on Delivery
  - Wallet / UPI simulation
- **Order Confirmation** email with invoice

### 📦 Order Management (Full CRUD)
- **Place Order** and receive confirmation ID
- **Order History** — all past and current orders
- **Order Detail View** — items, address, status timeline
- **Real-time Order Tracking** — Pending → Processing → Shipped → Delivered
- **Cancel Order** before dispatch
- **Return and Refund** request system
- **Download Invoice** as PDF
- **Reorder** — re-add all items from a past order

### ❤️ Wishlist
- **Add / Remove** products from wishlist
- **Move to Cart** directly from wishlist
- **Share Wishlist** via link
- Persisted across login sessions

### ⭐ Reviews and Ratings
- **Star Rating** (1–5) on purchased products
- **Write Review** with title and description
- **Upload Review Images**
- **Helpful / Not Helpful** vote on reviews
- **Verified Purchase** badge
- **Admin Moderation** — approve or reject reviews
- Average rating calculation and distribution chart

### 🛠️ Admin Dashboard (Full CRUD)
- **Product Management** — Add, Edit, Delete products with image upload
- **Category Management** — CRUD for categories and subcategories
- **Order Management** — view all orders, update status, process returns
- **User Management** — view all users, ban/unban, view activity
- **Coupon Management** — create, edit, expire discount codes
- **Review Moderation** — approve or reject reviews
- **Analytics Overview:**
  - Total sales, revenue, orders chart
  - Top selling products
  - New users per day
  - Revenue by category

### 🏪 Seller Panel
- **Seller Registration** with KYC details
- **List Products** for sale with pricing and inventory
- **Manage Inventory** — update stock levels
- **View Seller Orders** — orders specific to seller products
- **Sales Report** — daily, weekly, monthly breakdown
- **Seller Ratings** — aggregated from product reviews

### 🔍 Search and Discovery
- **Real-time Search** with instant results dropdown
- **Search History** — recent searches saved per user
- **Autocomplete Suggestions**
- **No Results** fallback with recommendations
- **URL-based Search State** — shareable filtered search URLs

### 📱 UI and UX Features
- Fully **Responsive Design** — mobile, tablet, desktop
- **Dark Mode** toggle
- **Skeleton Loaders** on all data-fetching screens
- **Toast Notifications** for all user actions
- **Infinite Scroll** on product listings
- **Image Zoom** on product detail page
- **Breadcrumb Navigation**
- **Back to Top** button
- **404 and Error Pages**

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=0D1117)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Services and Integrations
![Stripe](https://img.shields.io/badge/Stripe_Payments-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary_Images-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer_Email-009CAB?style=for-the-badge&logo=gmail&logoColor=white)
![Google OAuth](https://img.shields.io/badge/Google_OAuth_2.0-4285F4?style=for-the-badge&logo=google&logoColor=white)

### DevOps and Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-0D1117?style=for-the-badge&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=0D1117)

---

## 📁 Project Structure

```
amazon-clone/
│
├── client/                          # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/                  # Images, icons, fonts
│       ├── components/              # Reusable UI components
│       │   ├── common/              # Header, Footer, Navbar, Loader
│       │   ├── product/             # ProductCard, ProductGrid, ImageGallery
│       │   ├── cart/                # CartItem, CartSummary, CartDrawer
│       │   ├── checkout/            # AddressForm, PaymentForm, OrderSummary
│       │   ├── review/              # StarRating, ReviewCard, ReviewForm
│       │   └── admin/               # AdminSidebar, DataTable, Charts
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── ProductList.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   ├── OrderSuccess.jsx
│       │   ├── OrderHistory.jsx
│       │   ├── OrderDetail.jsx
│       │   ├── Wishlist.jsx
│       │   ├── Profile.jsx
│       │   ├── Auth/
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   └── ForgotPassword.jsx
│       │   └── Admin/
│       │       ├── Dashboard.jsx
│       │       ├── Products.jsx
│       │       ├── Orders.jsx
│       │       ├── Users.jsx
│       │       └── Coupons.jsx
│       ├── redux/
│       │   ├── store.js
│       │   └── slices/
│       │       ├── authSlice.js
│       │       ├── productSlice.js
│       │       ├── cartSlice.js
│       │       ├── orderSlice.js
│       │       └── wishlistSlice.js
│       ├── hooks/                   # Custom React hooks
│       ├── utils/                   # Helper functions
│       └── App.jsx
│
├── server/                          # Node.js Backend
│   ├── config/
│   │   ├── db.js                    # MongoDB connection
│   │   └── cloudinary.js            # Cloudinary config
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── reviewController.js
│   │   ├── wishlistController.js
│   │   ├── couponController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   ├── authMiddleware.js        # JWT verification
│   │   ├── adminMiddleware.js       # Admin role check
│   │   ├── errorHandler.js          # Global error handling
│   │   └── uploadMiddleware.js      # Multer file upload
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   ├── Review.js
│   │   ├── Wishlist.js
│   │   └── Coupon.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── wishlistRoutes.js
│   │   ├── couponRoutes.js
│   │   └── adminRoutes.js
│   ├── utils/
│   │   ├── sendEmail.js             # Nodemailer email helper
│   │   ├── generateToken.js         # JWT generator
│   │   └── apiFeatures.js           # Search, Filter, Pagination
│   └── server.js                    # Entry point
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Installation and Setup

### Prerequisites

Make sure you have these installed:

```bash
Node.js    >= 18.x
npm        >= 9.x
MongoDB    >= 6.x  (local or MongoDB Atlas)
Git
```

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Sandeep4548/amazon-clone.git
cd amazon-clone
```

### Step 2 — Setup Backend

```bash
cd server
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Fill in your `.env` file:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/amazon-clone

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=30d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary (Image Upload)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe (Payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000
```

Start the backend server:

```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

### Step 3 — Setup Frontend

```bash
cd ../client
npm install
```

Create frontend environment file:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

Start the frontend:

```bash
npm start
```

Frontend runs on: `http://localhost:3000`

### Step 4 — Seed Sample Data (Optional)

```bash
cd server
npm run seed
```

This creates:
- 1 Admin user: `admin@test.com` / `Admin@123`
- 1 Test user: `user@test.com` / `User@123`
- 50 sample products across 10 categories
- Sample orders and reviews

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Auth Routes

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login with email and password | No |
| POST | `/auth/google` | Google OAuth login | No |
| POST | `/auth/logout` | Logout current session | Yes |
| POST | `/auth/forgot-password` | Send reset email | No |
| PUT | `/auth/reset-password/:token` | Reset password | No |
| GET | `/auth/me` | Get current user | Yes |
| PUT | `/auth/update-profile` | Update profile | Yes |

### Product Routes

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| GET | `/products` | Get all products (search, filter, paginate) | No |
| GET | `/products/:id` | Get single product detail | No |
| POST | `/products` | Create new product | Admin |
| PUT | `/products/:id` | Update product | Admin |
| DELETE | `/products/:id` | Delete product | Admin |
| GET | `/products/top-rated` | Get top rated products | No |
| GET | `/products/category/:slug` | Products by category | No |

### Cart Routes

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| GET | `/cart` | Get user cart | Yes |
| POST | `/cart/add` | Add item to cart | Yes |
| PUT | `/cart/update` | Update item quantity | Yes |
| DELETE | `/cart/remove/:productId` | Remove item from cart | Yes |
| DELETE | `/cart/clear` | Clear entire cart | Yes |
| POST | `/cart/apply-coupon` | Apply coupon code | Yes |

### Order Routes

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| POST | `/orders` | Place new order | Yes |
| GET | `/orders/my-orders` | Get user order history | Yes |
| GET | `/orders/:id` | Get order detail | Yes |
| PUT | `/orders/:id/cancel` | Cancel order | Yes |
| PUT | `/orders/:id/return` | Request return | Yes |
| GET | `/orders` | Get all orders | Admin |
| PUT | `/orders/:id/status` | Update order status | Admin |

### Review Routes

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| GET | `/reviews/product/:productId` | Get product reviews | No |
| POST | `/reviews` | Create review | Yes |
| PUT | `/reviews/:id` | Update review | Yes |
| DELETE | `/reviews/:id` | Delete review | Yes |
| PUT | `/reviews/:id/helpful` | Mark helpful | Yes |

### Wishlist Routes

| Method | Endpoint | Description | Auth Required |
|:---|:---|:---|:---|
| GET | `/wishlist` | Get user wishlist | Yes |
| POST | `/wishlist/add/:productId` | Add to wishlist | Yes |
| DELETE | `/wishlist/remove/:productId` | Remove from wishlist | Yes |

---

## 🔐 Authentication Flow

```
User Registers
     ↓
OTP sent to Email
     ↓
Email Verified
     ↓
JWT Access Token issued (7 days)
JWT Refresh Token issued (30 days)
     ↓
Token stored in HTTP-only cookie
     ↓
Protected routes verified via authMiddleware
     ↓
Token expires → Refresh token used to get new access token
     ↓
Refresh token expires → User re-logs in
```

---

## 📊 Database Schema Overview

```
User
 ├── name, email, password (bcrypt hashed)
 ├── avatar, phone, role (user/seller/admin)
 ├── addresses[]
 ├── isVerified, isBlocked
 └── timestamps

Product
 ├── name, description, brand
 ├── images[], category, subcategory
 ├── price, discountPrice, stock
 ├── variants[] (size, color)
 ├── ratings, numReviews
 └── seller reference

Order
 ├── user reference
 ├── orderItems[] → product, qty, price
 ├── shippingAddress
 ├── paymentMethod, paymentResult
 ├── itemsPrice, taxPrice, shippingPrice, totalPrice
 ├── status (Pending/Processing/Shipped/Delivered/Cancelled)
 └── timestamps

Review
 ├── user reference, product reference
 ├── rating, title, comment
 ├── images[]
 ├── isVerifiedPurchase
 └── helpfulVotes[]

Cart
 ├── user reference
 ├── items[] → product, qty, variant
 ├── coupon reference
 └── timestamps

Coupon
 ├── code, discountType (percent/flat)
 ├── discountValue, minOrderAmount
 ├── usageLimit, usedCount
 └── expiresAt
```

---

## 🧪 Test Credentials

```
👤 Admin Account
   Email    : admin@amazon-clone.com
   Password : Admin@123

🛒 Test User Account
   Email    : user@amazon-clone.com
   Password : User@123

💳 Test Card (Stripe)
   Number   : 4242 4242 4242 4242
   Expiry   : Any future date
   CVV      : Any 3 digits
```

---

## 🗺️ Roadmap

- [x] User Authentication (JWT + Google OAuth)
- [x] Product CRUD with image upload
- [x] Cart and Wishlist
- [x] Order placement and tracking
- [x] Review and rating system
- [x] Coupon system
- [x] Admin dashboard
- [x] Stripe payment integration
- [x] Email notifications
- [ ] Real-time order updates (Socket.io)
- [ ] Push Notifications (Firebase)
- [ ] Product comparison feature
- [ ] Multi-language support
- [ ] Mobile App (React Native)

---

## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "Add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Sandeep Pradhan**
Full Stack Developer | Shopify Plus Engineer

<a href="https://github.com/Sandeep4548"><img src="https://img.shields.io/badge/GitHub-Sandeep4548-0D1117?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
<a href="https://linkedin.com/in/sandeep-pradhan-3b0679180"><img src="https://img.shields.io/badge/LinkedIn-Sandeep_Pradhan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="mailto:skpradhan2406@gmail.com"><img src="https://img.shields.io/badge/Email-skpradhan2406%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:131921,50:FF9900,100:131921&height=120&section=footer" width="100%"/>

<sub>Built with dedication by <strong>Sandeep Pradhan</strong> — Not affiliated with Amazon Inc.</sub>

</div>
