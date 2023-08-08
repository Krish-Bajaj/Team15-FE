import React from "react";
import { useParams } from "react-router-dom";
import { BondsNames } from "../api";
import { Link } from "react-router-dom";
import "../styles/BondDetails.css";
function BondDetails(props) {
  return <h2>I am Luffy! {props.issuer}'s son!</h2>;
}
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
