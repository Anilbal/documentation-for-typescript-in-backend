# Node.js + Express + PostgreSQL (TypeScript) API

A robust, production-ready RESTful API boilerplate and documentation template built with **Node.js**, **Express**, **TypeScript**, and **PostgreSQL**.

---

## 🏗️ Tech Stack

- **Runtime:** Node.js (v18+ or v20+)
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens) & Passwords hashed with `bcrypt`
- **Validation:** Joi
- **Environment Management:** `dotenv` + `envalid`
- **Package Manager:** `npm`

---

## 📁 Project Structure

```text
.
├── src/
│   ├── config/          # Environment variables and database config
│   ├── controllers/     # Request handlers & HTTP logic
│   ├── middlewares/     # Custom Express middlewares (Auth, Error handling, Logging)
│   ├── models/          # Database models / schemas
│   ├── routes/          # API route definitions
│   ├── services/        # Core business logic
│   ├── types/           # Custom TypeScript type definitions & interfaces
│   ├── utils/           # Helper functions & utility modules
│   ├── validators/      # Request validation schemas (e.g., Zod schemas)
│   └── server.ts           # Express app setup
├── .env.example         # Template for environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [PostgreSQL](https://www.postgresql.org/) (Local or Cloud instance like Neon/Supabase)
- `npm`

---

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anilbal/documentation-for-typescript-in-backend.git
   cd documentation-for-typescript-in-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory by copying `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Fill in your configuration credentials:

   ```env
   PORT=5000
   NODE_ENV=development

   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/your_database_db?schema=public

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRES_IN=7d
   ```

4. **Database Migration & Setup**
   Run the database migration scripts to apply schemas:

   ```bash
   npm db:migrate
   ```

5. **Start the Development Server**
   ```bash
   npm dev
   ```
   The server will start running at `http://localhost:5000/api/v1`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command      | Description                                                      |
| :----------- | :--------------------------------------------------------------- |
| `npm dev`    | Starts the dev server with hot-reloading using `tsx` / `nodemon` |
| `npm build`  | Compiles TypeScript into JavaScript (`dist/`)                    |
| `npm start`  | Runs the compiled production code from `dist/index.js`           |
| `npm lint`   | Runs ESLint to check for code formatting & standard violations   |
| `npm format` | Formats code automatically using Prettier                        |
| `npm test`   | Executes tests using Jest / Vitest                               |

---

## 🌐 API Documentation

### Base URL

```text
http://localhost:5000/api/v1
```

### Response Format

Standard JSON Response Wrapper:

```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": {}
}
```

Standard Error Response:

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid authentication credentials"
  }
}
```

---

### Endpoints Overview

#### 🔑 Authentication

| Method | Endpoint         | Description                          | Auth Required |
| :----- | :--------------- | :----------------------------------- | :-----------: |
| `POST` | `/auth/register` | Register a new user                  |      ❌       |
| `POST` | `/auth/login`    | Authenticate user & get token        |      ❌       |
| `GET`  | `/auth/me`       | Fetch current logged-in user profile |      ✅       |

#### 👤 Users

| Method   | Endpoint     | Description                | Auth Required |
| :------- | :----------- | :------------------------- | :-----------: |
| `GET`    | `/users`     | List all users (Paginated) |      ✅       |
| `GET`    | `/users/:id` | Get user by ID             |      ✅       |
| `PUT`    | `/users/:id` | Update user profile        |      ✅       |
| `DELETE` | `/users/:id` | Delete user account        |      ✅       |

---

## 🔒 Security & Best Practices

- **Helmet:** Helps secure Express apps by setting various HTTP headers.
- **CORS:** Configured cross-origin resource sharing.
- **Rate Limiting:** Protects endpoints from brute-force & DDoS attacks using `express-rate-limit`.
- **Input Sanitization & Validation:** Strictly typed request parameter validation via Zod.
- **Centralized Error Handling:** Global middleware catching synchronous and asynchronous errors.

---

## 🛠️ Contributing

Contributions are welcome! Follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
