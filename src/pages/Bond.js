import React, { useState } from "react";
// import BondsNames from "./BondsNames";
// import BondDetails from "./BondDetails";
import BondDetails from "../pages/BondDetails";
// import BondDetails from "../components/"
import BondsNames from "../pages/BondsNames";
import { Link } from "react-router-dom";
const Bond = () => {
  const [selectedBond, setSelectedBond] = useState(null);
  const bonds = BondsNames();
  console.log(bonds);
  const handleBondClick = (bond) => {
    setSelectedBond(bond);
  };
  return (
    <div>
      {bonds.map((bond) => (
        <div key={bond.id} onClick={() => handleBondClick(bond)}>
          <Link to={`/bonds/${bond.id}`}> View Details </Link>
          <p>This is the {bond.id} Bond </p>
        </div>
      ))}

      {selectedBond && <BondDetails bond={selectedBond} />}
    </div>
  );
};
export default Bond;
