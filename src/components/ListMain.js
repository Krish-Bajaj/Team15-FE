import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BondDetails from "../pages/BondDetails";
import axios from "axios";

const ListMain = () => {
  const [tp, setTp] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        // console.log(response.data);
        // tp = response.data;
        setTp(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [selectedBond, setSelectedBond] = useState(null);
  const [isBondClicked, setIsBondClicked] = useState(false);
  //   console.log(tp);
  const handleBondClick = (bond) => {
    setSelectedBond(bond);
    setIsBondClicked(true);
  };

  return (
    <div className="list">
      <div className="near">
        <h4>Near Maturity Bonds</h4>
        {tp.Near_matured?.map((bond) => (
          //   <Button variant="outlined" className="btn-space">
          //     <h3>{bond.issuer}</h3>
          //   </Button>
          <div key={bond.id} onClick={() => handleBondClick(bond)}>
            <Link to={`/bonds/${bond.id}`}> {bond.issuer} </Link>
            {/* <p>This is the {bond.id} Bond </p> */}
          </div>
        ))}
        {isBondClicked && <BondDetails selectedBond={selectedBond} />}
      </div>

      <div className="mature" style={{ marginTop: "2rem" }}>
        <h4>Matured Bonds</h4>

        {tp.Matured?.map((bond) => (
          <Button variant="outlined" className="btn-space">
            <h3>{bond.issuer}</h3>
          </Button>
        ))}
      </div>

      <div className="not_matured" style={{ marginTop: "2rem" }}>
        <h4>Non Matured Bonds</h4>

        {tp.Not_matured?.map((bond) => (
          <Button variant="outlined" className="btn-space">
            <h3>{bond.issuer}</h3>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ListMain;
