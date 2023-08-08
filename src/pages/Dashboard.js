import Metrics from "../components/Metrics";
import List from "../components/ListMain";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <>
      <Navbar />
      <div
        className="sketchy"
        style={{ display: "flex", margin: "5rem", marginTop: '7rem' }}
      >
        <Metrics />
        <VerticalLine />
        <List />
      </div>
    </>
  ) : null;
};

export default Dashboard;

const VerticalLine = () => {
  return (
    <div
      style={{
        borderLeft: "2px solid black",
        margin: "0 5rem",
      }}
    />
  );
};
