# 🩺 Health Dashboard

A fullstack medical admin dashboard built with:

- 🧠 **NestJS** (TypeScript) + **PostgreSQL** using TypeORM
- ⚛️ **React** + **Vite** + **Chakra UI**
- 🧱 **Monorepo** setup with `pnpm` workspaces and shared types
- 🧪 Mock data generation with realistic relationships (500+ records)

This project simulates a healthcare admin panel where doctors, patients, appointments, and lab results are managed through a clean dashboard interface.

---

## ✨ Features

- **Dashboard stats**: total patients, doctors, appointment status breakdown
- **Recent appointments**: date, doctor/patient, status badges
- **Relational database**: normalized with foreign keys
- **Shared types**: synced across backend and frontend
- **Scalable monorepo**: clean structure for real-world dev teams
- **DevContainer ready**: instant setup in VSCode

---

## 📸 Preview

![Dashboard Screenshot](./preview.png)

---

## 📦 Tech Stack

| Layer     | Stack                       |
|-----------|-----------------------------|
| Backend   | NestJS + TypeORM + Postgres |
| Frontend  | React + Vite + Chakra UI    |
| Dev Tools | pnpm + DevContainers        |

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/stgogm/health-dashboard.git
```

### 2. Open on VSCode

VSCode should ask to open this project on a DevContainer. This will automatically setup everything (you need Docker installed).

### 3. Run and enjoy!

Use `pnpm pnpm dev:api` to start the API and `pnpm dev:app` to start the app. The ports are shown on the PORTS tab on your VSCode right panel.
