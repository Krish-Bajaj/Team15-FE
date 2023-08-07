import React from "react";
import { useParams } from "react-router-dom";
import { getBonds } from "../api";
import { Link } from "react-router-dom";
const BondDetails = () => {
  const bonds = getBonds();

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
              <Link to="/dashboard"> Show All Bonds </Link>
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
};

export default BondDetails;
