import React from "react";
import { useParams } from "react-router-dom";
import { BondsNames } from "../api";
import { Link } from "react-router-dom";
import "../styles/BondDetails.css";

const BondDetails = () => {
  const bonds = BondsNames();
  const { bondId } = useParams();
  const bond = bonds.find((p) => p.id === parseInt(bondId));
  const linkStyle = {
    textDecoration: "none",
    color: "#333",
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
