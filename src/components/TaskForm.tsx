import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { Task } from "../models/Task";
import { useEffect } from "react";

const TaskForm = () => {
  const { addTask, updateTask, getTaskById } = useTasks();
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);
  const existingTask = id ? getTaskById(id) : null;

  const [title, setTitle] = useState(existingTask?.title || "");
  const [description, setDescription] = useState(existingTask?.description || "");
  const [status, setStatus] = useState<Task["status"]>(existingTask?.status || "todo");

  useEffect(() => {
  if (isEditing && !existingTask) {
    navigate("/dashboard");
  }
}, [isEditing, existingTask, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && id) {
      updateTask(id, { title, description, status });
    } else {
      addTask({ title, description, status });
    }
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>{isEditing ? "Edit Task" : "New Task"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <textarea
          required
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br />
        <select value={status} onChange={(e) => setStatus(e.target.value as Task["status"])}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select><br />
        <button type="submit">{isEditing ? "Update" : "Create"} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
