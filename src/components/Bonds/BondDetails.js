import React from "react";
import { useParams } from "react-router-dom";
import BondsNames from "./BondsNames";
import { Link } from "react-router-dom";
const BondDetails = () => {
  const bonds = BondsNames();

  const { bondId } = useParams();
  const bond = bonds.find((p) => p.id === parseInt(bondId));
  console.log("in the details");
  console.log(bond);
  console.log(bond.description, bond.name);
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Show All Bonds </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p>`Bond id is {bondId} `</p>
        <p>Name : {bond.name}</p>
        <p>Price : {bond.price}</p>
        <p>Description : {bond.description}</p>
      </div>
    </>
  );
  //   return (
  //     <div>
  //       {/* <h2>{bond.name}</h2>
  //       <p>{bond.description}</p>
  //       <p>Price: ${bond.price}</p> */}
  //       <p> `Bond is {bond}`</p>
  //       <p>THis it the Bond Details Page </p>
  //     </div>
  //   );
};

// const BondDetails = () => {
//   const { bondId } = useParams();

//   return (
//     <div>
//       <p> `Bond id is {bondId}`</p>
//       <p>THis it the Bond Details Page </p>
//     </div>
//   );
// };

export default BondDetails;
