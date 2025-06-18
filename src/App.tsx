import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import CallbackPage from "./components/CallbackPage";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/tasks/:id/edit" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
