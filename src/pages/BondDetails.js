import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/BondDetails.css";
import Navbar from "../components/Navbar";

function BondDetails() {
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

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '6rem' }}>
        <Link to="/" style={linkStyle}>
          Show All Bonds{" "}
        </Link>
      </div>

      <div className="bond-attributes">
        {/* <div className="bond-attribute">
          <span className="attribute-label">Bond Name:</span>
          <span className="attribute-value"> {selectedBond.name} </span>
        </div> */}
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
  );
}

// "_id": "64d23aba8007a174bb9f8f51",
// "type": "Corporate",
// "issuer": "ICICI Banj",
// "maturitydate": "2025-11-09T18:30:00.000Z",
// "interestrate": 8.5,
// "facevalue": 10,
// "tenure": 5,
// "__v": 0
// const BondDetails = React.memo(({ selectedBond }) => {
//   if (!selectedBond) {
//     // Return loading or placeholder content if selectedBond is not available yet
//     return <div>Loading...</div>;
//   }
//   // const bonds = BondsNames();
//   // const { bondId } = useParams();
//   // const bond = bonds.find((p) => p.id === parseInt(bondId));
//   // const bond = props.parentState.;
//   // console.log({ selectedBond }.issuer);
//   // console.log({ selectedBond }.type);
//   // const bond = { selectedBond };
//   const linkStyle = {
//     textDecoration: "none",
//     color: "#333",
//     backgroundColor: "#f9f9f9",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "20px",
//     margin: "20px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   };
//   return (
//     <>
//       <div>
//         <Link to="/" style={linkStyle}>
//           Show All Bonds{" "}
//         </Link>
//       </div>

//       <div className="bond-attributes">
//         {/* <div className="bond-attribute">
//           <span className="attribute-label">Bond Name:</span>
//           <span className="attribute-value"> {selectedBond.name} </span>
//         </div> */}
//         <div className="bond-attribute">
//           <span className="attribute-label">Issuer:</span>
//           {selectedBond && (
//             // <div>
//             //   <h3>{selectedBond.issuer}</h3>
//             //   {/* Display other details of selectedBond */}
//             // </div>
//             <span className="attribute-value"> {selectedBond.issuer} </span>
//           )}
//         </div>
//         {/* <div className="bond-attribute">
//           <span className="attribute-label">Issue Date:</span>
//           <span className="attribute-value"> {selectedBond.issueDate} </span>
//         </div>
//         <div className="bond-attribute">
//           <span className="attribute-label">Face Value:</span>
//           <span className="attribute-value"> {selectedBond.faceValue} </span>
//         </div>
//         <div className="bond-attribute">
//           <span className="attribute-label">Description:</span>
//           <span className="attribute-value"> {selectedBond.description} </span>
//         </div> */}
//       </div>
//     </>
//   );
// });

export default BondDetails;
