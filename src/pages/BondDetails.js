import React from "react";
import { useParams } from "react-router-dom";
// import BondsNames from "./BondsNames";
import BondsNames from "../pages/BondsNames";

import { Link } from "react-router-dom";
// import "./Bonddetails.css";
import "../styles/Bonddetails.css";
// import "../styles/";
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
      <div className="bond-container">
        {/* <p>`Bond id is {bondId} `</p> */}
        <h2 className="bond-title"> {bond.name} Bond Details</h2>
        <p className="bond-info">Bond Name: {bond.bondName}</p>
        <p className="bond-info">Bond Price : {bond.price}</p>
        <p className="bond-info">Issuer: {bond.issuer}</p>
        <p className="bond-info">Issue Date: {bond.issueDate}</p>
        <p className="bond-info">Face Value: {bond.faceValue}</p>
        <p className="bond-info">Description : {bond.description}</p>
      </div>
    </>
  );
};

export default BondDetails;
