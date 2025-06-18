import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav style={{ marginBottom: "2rem" }}>
      <Link to="/">Home</Link>

      {isAuthenticated ? (
        <>
          {" | "}
          <Link to="/dashboard">Dashboard</Link>
          {" | "}
          <Link to="/tasks/new">New Task</Link>
          {" | "}
          <Link to="/profile">Profile</Link>
          <span style={{ marginLeft: "1rem" }}>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </span>
        </>
      ) : (
        <span style={{ marginLeft: "1rem" }}>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </span>
      )}
    </nav>
  );
};

export default NavBar;