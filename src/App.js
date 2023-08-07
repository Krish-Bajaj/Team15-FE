import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import BondDetails from "./components/Bonds/BondDetails";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Bond from './components/Bonds/Bond';

function App() {
  return (
    <>
        <div className="App">
          <LoginButton/>
          <br/>
          <LogoutButton/>
          <br />
          <Profile/>
        </div>

      <Routes>
        <Route exact path="/bond" element={<Bond />} />
        <Route path="/bonds/:bondId" element={<BondDetails />} />
      </Routes>
    </>
  );
}

export default App;
