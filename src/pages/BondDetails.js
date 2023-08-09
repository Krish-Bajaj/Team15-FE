import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/BondDetails.css";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function BondDetails() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [bond, setBond] = useState({})

  useEffect(() => {
    const bondId = window.location.href.split('/')[4] || '64d23b95150c2f5e8a7457cc'
    axios
      .get(`http://localhost:8000/getBonds/${bondId}`)
      .then((response) => {
        console.log('$$', response.data);
        setBond(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  return isAuthenticated ? (
    <>
      <Navbar />
      <div style={{ marginTop: '6rem' }}>
        <Link to="/" style={linkStyle}>
          Show All Bonds{" "}
        </Link>
      </div>

      <div className="bond-attributes">
        <div className="bond-attribute">
          <span className="attribute-label">Issuer:</span>
          <span className="attribute-value"> {bond.issuer} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Type:</span>
          <span className="attribute-value"> {bond.type} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Maturity Date:</span>
          <span className="attribute-value"> {bond.maturitydate} </span>
        </div>
        <div className="bond-attribute">
          <span className="attribute-label">Interest Rate:</span>
          <span className="attribute-value"> {bond.interestrate} </span>
        </div>

        <div className="bond-attribute">
          <span className="attribute-label">Face Value:</span>
          <span className="attribute-value"> {bond.facevalue} </span>
        </div>

        <div className="bond-attribute">
          <span className="attribute-label">Tenure:</span>
          <span className="attribute-value"> {bond.tenure} </span>
        </div>
      </div>
    </>
  ) : null;
}

export default BondDetails;
