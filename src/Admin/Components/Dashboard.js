import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";

const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return (
      <div>
        <Layout />
      </div>
    );
  }
};
export default Dashboard;
