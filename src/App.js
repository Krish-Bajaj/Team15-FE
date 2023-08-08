import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

import LoginPage from './pages/LoginPage';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

import BondDetails from "./pages/BondDetails";
import Dashboard from './pages/Dashboard';

function App() {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
        <div className="App">
          <LoginPage/>
          <br/>
          <LogoutButton/>
          <br />
          <Profile/>
        </div>

      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/bonds/:bondId" element={<BondDetails />} />
      </Routes>
    </>
  );
}

export default App;
