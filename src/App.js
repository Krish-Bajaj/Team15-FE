import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ListMain from "./components/ListMain";
import LoginPage from "./pages/LoginPage";
import Profile from "./Profile";
import { useEffect, useState } from "react";

import BondDetails from "./pages/BondDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { IndividualBonds, setIndividualBonds } = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response.data);
        setIndividualBonds(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [selectedBond, setSelectedBond] = useState(null);

  // const updateSelectedBond = (bond) => {
  //   setSelectedBond(bond);
  // };
  return (
    <>
      <div className="App">
        <LoginPage />
        <br />

        {isAuthenticated ? <></> : <Profile />}
      </div>
      {/* (<ListMain updateSelectedBond={updateSelectedBond} />) */}
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/bonds/:bondId"
          element={<BondDetails props={selectedBond} />}
        />
        <Route path="/bond" element={IndividualBonds} />
      </Routes>
      {/* {IndividualBonds} */}
    </>
  );
}

export default App;
