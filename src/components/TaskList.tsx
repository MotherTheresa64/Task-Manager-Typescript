import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h2>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. <Link to="/tasks/new">Create one</Link>.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.status}
              {" | "}
              <Link to={`/tasks/${task.id}`}>View</Link>
              {" | "}
              <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
              {" | "}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
