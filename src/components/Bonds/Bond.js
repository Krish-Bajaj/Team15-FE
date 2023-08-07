import React, { useState } from "react";
import ButtonWithInfo from "./ButtonWithInfo";
import BondsNames from "./BondsNames";
import BondDetails from "./BondDetails";
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
          {/* <ButtonWithInfo
            buttonText="Click Me"
            infoText="This button provides some information."
          ></ButtonWithInfo> */}
          {/* /bonds/:bondId */}
          <Link to={`/bonds/${bond.id}`}> View Details </Link>
          <p>This is the {bond.id} Bond </p>
        </div>
      ))}

      {selectedBond && <BondDetails bond={selectedBond} />}
    </div>
    // {selectBond &&  };

    //   {selectedProduct && <ProductDetails product={selectedProduct} />}
    //   };
  );
};
export default Bond;
