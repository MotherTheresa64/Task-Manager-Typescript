import { useParams, Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskDetails = () => {
  const { id } = useParams();
  const { getTaskById } = useTasks();

  const task = id ? getTaskById(id) : null;

  if (!task) {
    return (
      <div>
        <h2>Task Not Found</h2>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Created:</strong> {new Date(task.createdAt).toLocaleString()}</p>
      <p><strong>Updated:</strong> {new Date(task.updatedAt).toLocaleString()}</p>
      <Link to={`/tasks/${task.id}/edit`}>Edit</Link> | <Link to="/dashboard">Back</Link>
    </div>
  );
};

export default TaskDetails;
