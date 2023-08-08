import "./App.css";
import { Route, Routes } from "react-router-dom";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";

import BondDetails from "./pages/BondDetails";
import Dashboard from './pages/Dashboard';


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
        <div className="App">
          <LoginButton/>
          <br/>
          
          {isAuthenticated ? <Dashboard/> : <></>}
          <LogoutButton/>
          <br />
        </div>

      <Routes>
        {/* <Route path="/" element={<Dashboard/>}/> */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/bonds/:bondId" element={<BondDetails />} />
      </Routes>

    </>
  );
}

export default App;
