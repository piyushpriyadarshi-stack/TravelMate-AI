# 🌍 TravelMate AI – Smart Travel Planning, Hotel & Transportation Platform

> **Full-Stack Academic Major Project**  
> Built with React (Vite), Tailwind CSS, Node.js Express, PostgreSQL, Prisma ORM, Google Gemini AI & Razorpay.

---

## 📌 Project Overview
**TravelMate AI** is a comprehensive travel planning and booking application designed to solve fragmented booking experiences. Instead of visiting separate portals for destinations, hotels, flights, and local transit, TravelMate AI provides a unified, intelligent platform where customers can:
1. Search and discover domestic and international destinations.
2. Select travel dates with **strict system-date validation** (past dates are strictly blocked).
3. Select passenger counts with **rigorous vehicle capacity limits** (e.g. 4 for private cars, 6 for SUVs).
4. Discover hotels by category (Budget to Luxury) and inspect date-aware room availability.
5. Select verified transportation options (Flights, Trains, Buses, Private Sedans, SUVs).
6. Recalculate complete pricing, taxes, and discounts strictly on the backend.
7. Pay securely via Razorpay Test/Sandbox mode.
8. Receive confirmed booking numbers (e.g., `TM-2026-000001`), download invoices, and manage trips.
9. Interact with a Google Gemini AI travel assistant for intelligent recommendations.

---

## 🏛️ Core Design Principle (Section 2)
```
┌────────────────────────────────────────────────────────┐
│                   TravelMate AI                        │
├──────────────────────────┬─────────────────────────────┤
│   AI Layer (Gemini)      │   Backend Logic (Express)   │
├──────────────────────────┼─────────────────────────────┤
│ • Natural language chat  │ • Calendar & date rules     │
│ • Recommends itineraries │ • Passenger limits          │
│ • Suggests alternatives  │ • Room availability         │
│ • Explains options       │ • Vehicle seat capacities   │
│                          │ • Real prices & taxes       │
│  ❌ NEVER confirms       │ • Razorpay payment check    │
│     bookings directly    │ • Booking IDs & invoices    │
│  ❌ NEVER invents fake   │                             │
│     prices or rooms      │ ✅ SOLE FINAL AUTHORITY    │
└──────────────────────────┴─────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, React Router v6, Lucide React Icons |
| **Backend** | Node.js, Express.js, CORS, Morgan Logger, Dotenv |
| **Database** | PostgreSQL |
| **ORM** | Prisma ORM 5.x |
| **AI Integration** | Google Gemini API (Stage 14) |
| **Payment Gateway** | Razorpay Sandbox/Test Mode (Stage 10) |
| **Fonts & Design** | Plus Jakarta Sans, Outfit, Glassmorphism, Responsive Mobile-First |

---

## 📁 Clean Project Structure
```
tour_and_travel/
├── client/                     # Frontend React (Vite) Application
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI (Navbar, Footer, HeroSearch, Cards)
│   │   ├── pages/              # Route Pages (Home, Explore, Hotels, Transport, etc.)
│   │   ├── services/           # API fetch client
│   │   ├── utils/              # Dynamic date calculators & currency formatters
│   │   ├── App.jsx             # Main Router definition
│   │   ├── index.css           # Tailwind + Custom Design Tokens
│   │   └── main.jsx            # React root mount
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                     # Backend Node.js Express API
│   ├── prisma/
│   │   ├── schema.prisma       # Complete PostgreSQL Data Models
│   │   └── seed.js             # Database Seeder script
│   ├── src/
│   │   ├── controllers/        # Destinations, Hotels, Transport, Health
│   │   ├── middleware/         # Error handlers & request loggers
│   │   ├── routes/             # Express API router registry
│   │   ├── services/           # Prisma client & Data abstraction layer
│   │   ├── utils/              # Sample seed datasets (labeled Demo Data)
│   │   └── server.js           # Express app bootstrap
│   ├── .env.example
│   ├── .env
│   └── package.json
│
├── .env.example                # Global Environment Template
├── README.md                   # Complete Documentation
└── package.json                # Project Root Orchestration
```

---

## ⚡ Quick Start & Installation

### Step 1: Install Dependencies
From the root workspace directory, run:
```bash
# Install root, backend, and frontend packages simultaneously:
npm run install:all
```
*Or manually:*
```bash
cd server && npm install
cd ../client && npm install
```

### Step 2: Environment Configuration
Copy `.env.example` in both root and `server`:
```bash
cp .env.example server/.env
```
Default `server/.env` contents:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/travelmate_db?schema=public"
JWT_SECRET="travelmate_super_secret_jwt_key_academic_project_2026"
GEMINI_API_KEY=""
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
```

### Step 3: Run the Application
You can run both Frontend and Backend concurrently from the root directory:
```bash
npm run dev
```
*Or in separate terminal tabs:*
- **Backend API**: `cd server && npm run dev` (Runs on `http://localhost:5000`)
- **Frontend App**: `cd client && npm run dev` (Runs on `http://localhost:5173`)

Open your browser at **`http://localhost:5173`**!

---

## 🗄️ Database Setup (PostgreSQL & Prisma)

### Option A: Local PostgreSQL
1. Install PostgreSQL on your system (or use pgAdmin).
2. Create a database called `travelmate_db`:
   ```sql
   CREATE DATABASE travelmate_db;
   ```
3. Update `DATABASE_URL` in `server/.env` with your username & password:
   ```env
   DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/travelmate_db?schema=public"
   ```
4. Push schema and seed the sample data:
   ```bash
   cd server
   npx prisma db push
   node prisma/seed.js
   ```

### Option B: Free Cloud PostgreSQL (Neon / Supabase)
1. Create a free PostgreSQL database at [Neon.tech](https://neon.tech) or [Supabase](https://supabase.com).
2. Copy the connection string directly into `server/.env` as `DATABASE_URL`.
3. Run `npx prisma db push && node prisma/seed.js` inside the `server/` directory!

> 💡 **Stand-Alone Demo Mode**: Even if PostgreSQL is not yet configured on your machine, TravelMate AI automatically runs in a graceful **Demo Data Mode** (`source: DEMO_DATA`). All endpoints and frontend cards work out of the box!

---

## 📡 API Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | System status, database connection diagnostic & server time |
| `GET` | `/api/destinations` | Search destinations with filters (`query`, `country`, `isDomestic`) |
| `GET` | `/api/destinations/:id` | Single destination with associated hotels and activities |
| `GET` | `/api/hotels` | List hotels with filters (`category`, `minPrice`, `maxPrice`, `minRating`) |
| `GET` | `/api/hotels/:id` | Hotel details with room types, amenities, and cancellation policy |
| `GET` | `/api/transportation` | List transit options (`origin`, `destination`, `type`, `minCapacity`) |

---

## 🧪 Stage 1 Verification & Testing Scenarios

1. **Dynamic Date Validation Test**:
   - Check the check-in input on the homepage search bar. It automatically uses today's date (`2026-09-24`).
   - Notice that dates before today are disabled (`min={today}`).
   - If check-in is set to Sept 25, check-out minimum is automatically set to Sept 26.
2. **Passenger Limits Test**:
   - Try clicking minus when passenger count is 1. It is disabled (strictly prevents 0 or negative passengers).
   - Maximum is set to 40 passengers.
3. **Transportation Capacity Test**:
   - Visit the Transportation page (`/transportation`).
   - Increase group size to 5 passengers. The Private Car card shows an alert: *"Your group of 5 exceeds single vehicle capacity (4). Multiple vehicles required."*
4. **Data Service Transparency**:
   - Inspect cards on the homepage. They feature a clear **"Demo Data"** badge per Section 40.
   - Check `http://localhost:5000/api/health` to see database status and system diagnostics.

---

## 🚀 17-Stage Project Roadmap
- ✅ **Stage 1**: Foundation, Project Setup, Backend API, Database Schema & UI
- ⏳ **Stage 2**: User Authentication (Bcrypt Password Hashing & JWT)
- ⏳ **Stage 3**: Advanced Destination Search & Dynamic Suggestions
- ⏳ **Stage 4**: Hotel System & Room Types Engine
- ⏳ **Stage 5**: Transportation Fleet & Seat Validation
- ⏳ **Stage 6**: Trip Configuration & Multi-Item Builder
- ⏳ **Stage 7**: Dynamic Pricing & Tax Recalculation Engine
- ⏳ **Stage 8**: Multi-Factor Booking Validation
- ⏳ **Stage 9**: Checkout Flow & Cancellation Terms
- ⏳ **Stage 10**: Razorpay Test Mode Payment Gateway
- ⏳ **Stage 11**: Booking Confirmation & Unique ID Generation
- ⏳ **Stage 12**: My Trips Customer Dashboard
- ⏳ **Stage 13**: Admin Management Portal
- ⏳ **Stage 14**: Google Gemini AI Travel Assistant
- ⏳ **Stage 15**: PDF Invoice Generator
- ⏳ **Stage 16**: Security Hardening & Concurrency Protection
- ⏳ **Stage 17**: Production Deployment & Optimization
