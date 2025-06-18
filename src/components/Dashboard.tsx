import { useAuth } from "../auth/useAuth";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <p>Access denied. Please log in.</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is your protected dashboard with task details.</p>
    </div>
  );
};

export default Dashboard;
