import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProviderWithNavigate from "./auth/authProvider";
import { TaskProvider } from "./context/TaskContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWithNavigate>
        <TaskProvider>
          <App />
        </TaskProvider>
      </AuthProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
