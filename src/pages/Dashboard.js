import Metrics from "../components/Metrics";
import List from "../components/ListMain";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="sketchy" style={{ display: "flex", margin: "5rem" }}>
      <Metrics />
      <div
        style={{
          borderLeft: "2px solid black",
          margin: "0 5rem",
        }}
      />
      <List />
    </div>
  );
};

export default Dashboard;
