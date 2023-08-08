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
  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "#333", // Custom text color
    // Add other custom styles as needed
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <>
      <div>
        <Link to="/" style={linkStyle}>
          Show All Bonds{" "}
        </Link>
      </div>
      {/* <div className="bond-container">
       
        <h2 className="bond-title"> {bond.name} </h2>
        <p className="bond-info">Bond Price : {bond.price}</p>
        <p className="bond-info">Issuer: {bond.issuer}</p>
        <p className="bond-info">Issue Date: {bond.issueDate}</p>
        <p className="bond-info">Face Value: {bond.faceValue}</p>
        <p className="bond-info">Description : {bond.description}</p>
      </div> */}

      <div className="bond-attributes">
        <div className="bond-attribute">
          <span className="attribute-label">Bond Name:</span>
          <span className="attribute-value"> {bond.name} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Issuer:</span>
          <span className="attribute-value"> {bond.issuer} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Issue Date:</span>
          <span className="attribute-value"> {bond.issueDate} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Face Value:</span>
          <span className="attribute-value"> {bond.faceValue} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Description:</span>
          <span className="attribute-value"> {bond.description} </span>
        </div>
      </div>
    </>
  );
};

export default BondDetails;
