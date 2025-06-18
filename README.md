# ✅ Task Management App (React + TypeScript)

A fully featured task management app built using **React**, **TypeScript**, **Auth0**, and **Context API**. Designed as part of Coding Temple's Software Engineering curriculum to demonstrate TypeScript fundamentals, state management, and secure authentication.

---

## 🚀 Features

- ✅ Auth0 authentication (login/logout)
- ✅ Protected dashboard and profile routes
- ✅ Task creation, editing, viewing, and deletion
- ✅ Context API + typed hooks for global state
- ✅ Fully typed components and models using TypeScript
- ✅ Dark mode UI polish with clean navigation

---

## 🧠 Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Auth:** Auth0 SPA SDK
- **State:** Context API + `useReducer`/typed hooks
- **Routing:** React Router DOM v6

---

## 🔐 Auth0 Setup

You'll need to create a **Single Page App** in [Auth0](https://auth0.com) and configure the following:

- **Allowed Callback URLs:** `http://localhost:5173/callback`
- **Allowed Logout URLs:** `http://localhost:5173`
- **Allowed Web Origins:** `http://localhost:5173`

Then create a `.env.local` file:

```env
VITE_AUTH0_DOMAIN=your-domain.us.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id

🛠️ Getting Started
bash
Copy
Edit
# Clone the repo
git clone https://github.com/MotherTheresa64/Task-Manager-Typescript.git
cd task-manager-typescript

# Install dependencies
npm install

# Run the app
npm run dev

📁 Folder Structure
pgsql
Copy
Edit
src/
│
├── components/         # All views + NavBar
├── context/            # TaskContext + hooks
├── models/             # Task type interface
├── auth/               # Auth0 wrapper
├── styles.css          # UI polish
└── main.tsx            # Root config


👩‍💻 Developed By
Noah Ragan — GitHub: @MotherTheresa64