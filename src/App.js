import "./App.css";
import { Route, Routes } from "react-router-dom";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

// import BondDetails from "./pages/BondDetails";
import BondDetails from "./pages/BondDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      {/* <div className="App">
        <LoginButton />
        <br />
        <LogoutButton />
        <br />
        <Profile />
      </div> */}

      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/bonds/:bondId" element={<BondDetails />} />
      </Routes>
    </>
  );
}

export default App;
