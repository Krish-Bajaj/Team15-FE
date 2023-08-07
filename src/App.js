import logo from "./logo.svg";
import "./App.css";
import Bond from "./components/Bonds/Bond";
import { Link, Route, Routes } from "react-router-dom";
import BondDetails from "./components/Bonds/BondDetails";
function App() {
  return (
    <>
      {/* <div className="App">
        
        Hello React
      </div> */}
      {/* <Bond> </Bond> */}
      <div>
        <h1> Bonds Website </h1>
        {/* <nav>
          <ul>
            <li>
              <Link to="/"> AllBonds </Link>
            </li>
          </ul>
        </nav> */}
      </div>

      <Routes>
        <Route exact path="/" element={<Bond />} />
        <Route path="/bonds/:bondId" element={<BondDetails />} />
      </Routes>
    </>
  );
}

export default App;
