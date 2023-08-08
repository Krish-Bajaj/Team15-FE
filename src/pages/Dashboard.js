import Metrics from "../components/Metrics";
import List from "../components/ListMain";
import "../styles/Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Dashboard</a>
          <form class="d-flex" role="search">
            <button class="btn btn-danger" onClick={() => logout({ logoutParams: { returnTo: "/" } })} type="submit">Logout</button>
          </form>
        </div>
      </nav>
    <figure class="text-center">
        <h1 class="display-1">Bond's J Security</h1>
    </figure>
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
    </>
  ) : null;
};

export default Dashboard;
