import { useState } from "react";
import { Link } from "react-router-dom";
import { getBonds } from "../api";
import BondDetails from "../pages/BondDetails";

const List = () => {
  const [selectedBond, setSelectedBond] = useState(null);
  const bonds = getBonds();
  console.log(bonds);
  const handleBondClick = (bond) => {
    setSelectedBond(bond);
  }

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
}

export default List
