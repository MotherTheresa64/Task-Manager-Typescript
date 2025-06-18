import { useAuth } from "../auth/useAuth";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return (
    isAuthenticated && (
      <div>
        <h2>Profile</h2>
        <img src={user?.picture} alt="User profile" />
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    )
  );
};

export default Profile;
