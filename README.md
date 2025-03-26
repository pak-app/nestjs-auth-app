# 🔐 NestJS Authentication API

A modern and secure **authentication API** built with [NestJS](https://nestjs.com/), MongoDB, and JWT — Dockerized for scalable deployment.

---

## 📦 Features

- ✅ **User Registration** with email & username
- ✅ **Secure Login** using hashed passwords (bcrypt)
- ✅ **JWT Authentication**
- ✅ **Protected Routes** with `@UseGuards`
- ✅ **Modular Structure** (`auth`, `users`, etc.)
- ✅ **Environment Variables via .env**
- ✅ **MongoDB containerized via Docker**
- ✅ **Validation with DTOs & class-validator**
- ✅ **TypeScript clean codebase**

---

## 🚀 Tech Stack

- **NestJS** + **TypeScript**
- **MongoDB** (via Docker)
- **Mongoose**
- **JWT** for access tokens
- **bcrypt** for password hashing
- **Docker / Docker Compose** for containerization
- **class-validator** for input validation

---

## 🐳 Docker Setup

### 1. 🧪 Development

```bash
docker compose up --build
```

Your backend will be live at: [http://localhost:3000](http://localhost:3000)

### 2. 🏁 Docker Services

| Service   | Description     | Port |
|-----------|------------------|------|
| app       | NestJS API       | 3000 |
| mongodb   | MongoDB database | 27017 |

---

## 🔧 Environment Variables (`.env`)

```env
# MongoDB
MONGO_INITDB_ROOT_USERNAME=poorya
MONGO_INITDB_ROOT_PASSWORD=qwer1234
DATABASE_NAME=authApp
DATABASE_PORT=27017
DATABASE_CONTAINER_NAME=localhost

# JWT
JWT_SECRET=supersecretkey123
```

> You can customize these in `.env`

---

## 🛠️ API Endpoints

### `POST /auth/register`

```json
{
  "email": "user@example.com",
  "username": "myuser",
  "password": "strongpassword",
  "fullName": "Your_full_name"
}
```

---

### `POST /auth/login`

```json
{
  "identifier": "user@example.com", // identify by your email or username
  "password": "strongpassword"
}
```

✔️ Returns a `JWT` access token.

---

### `GET /auth/test`

Protected route — requires `Authorization: Bearer <token>`

✔️ Returns current user info if valid

---

## 🧪 Local Testing

### CLI Auth Tester

Use the built-in CLI script to test login + authorization:

```bash
node client/sign-up.js # Sign-up
node client/login.js # Login and test authorization
```

✔️ Prompts for credentials  
✔️ Authenticates and calls protected route

---

## 🧱 Folder Structure

```
nestjs-auth-api/
├── client/                     # (Optional) CLI tester or frontend
├── dist/                       # Compiled JS (after build)
├── node_modules/               # Installed dependencies
├── src/
│   ├── auth/                   # Auth module (login, register, JWT, guards)
│   ├── user/                   # User module (schema, service)
│   ├── app.controller.ts       # Main app controller
│   ├── app.module.ts           # Root module
│   ├── app.service.ts          # App-wide service
│   └── main.ts                 # Entry point
├── test/                       # Test cases (e.g., e2e or unit)
├── .dockerignore               # Docker exclusions
├── .env                        # App environment variables
├── .gitignore                  # Git exclusions
├── .prettierrc                 # Prettier config
├── database.env                # (Optional) database-only env vars
├── docker-compose.yml          # Compose services (app + db)
├── Dockerfile                  # Docker build config
├── eslint.config.mjs           # ESLint configuration
├── nest-cli.json               # NestJS config (source dir, etc.)
├── package.json                # Project metadata & scripts
├── package-lock.json           # Dependency lockfile
├── README.md                   # 📄 Project documentation
├── tsconfig.build.json         # TypeScript build config
└── tsconfig.json               # General TypeScript config

```

---

## 🔒 Security Highlights

- Bcrypt password hashing
- JWT-based stateless auth
- Route protection using `JwtAuthGuard`
- DTO-based validation with `forbidNonWhitelisted` rules
- `.env` file for sensitive config (not committed)

---

## 🐛 Troubleshooting

- **Docker cannot connect to DB:** check your `.env` values and Docker networking
- **Cannot access app at `localhost:3000`?** Ensure `app.listen(3000, { host: '0.0.0.0' })` in `main.ts`
- **Validation not working?** Add global `ValidationPipe` in `main.ts`

---

## 💡 Future Enhancements

- [ ] Refresh token support
- [ ] Role-based access control (RBAC)
- [ ] Email verification on register
- [ ] Password reset workflow
- [ ] Swagger documentation

---

## Development Zone

The idea behind the docker is run, develop and deploy without installing anything on your local machine. So this section is on development to prepare a development environment to develop, debug, test and deploy a app without any local setup.

---

## ✨ Author

Made with ❤️ by [Poorya](https://github.com/pak-app)  
Open for collaboration, feedback, and PRs!
