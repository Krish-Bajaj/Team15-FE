import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import LoginPage from "./pages/LoginPage";
import Profile from "./Profile";
import { useEffect } from "react";

import BondDetails from "./pages/BondDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <LoginPage />
        <br />

        {isAuthenticated ? <></> : <Profile />}
      </div>

      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/bonds/:bondId" element={<BondDetails />} />
      </Routes>
    </>
  );
}

export default App;
