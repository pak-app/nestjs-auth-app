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
  "password": "strongpassword"
}
```

---

### `POST /auth/login`

```json
{
  "identifier": "user@example.com", // or "myuser"
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
node auth-client.js
```

✔️ Prompts for credentials  
✔️ Authenticates and calls protected route

---

## 🧱 Folder Structure

```
src/
├── auth/         # Login, register, JWT
├── users/        # User schema + DB logic
├── common/       # (optional: guards, interceptors)
├── main.ts       # Entry point
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

## ✨ Author

Made with ❤️ by [Poorya](https://github.com/your-github-username)  
Open for collaboration, feedback, and PRs!
