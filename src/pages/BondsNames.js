import React from "react";

function BondsNames() {
  const products = [
    {
      id: 1,
      name: "Deutsche Bank Bond",
      description: "This is Deutsche Bank",
      price: 19.99,
      issuer: "XYZ Corporation",
      issueDate: "2023-08-07",
      faceValue: "$1000",
    },
    {
      id: 2,
      name: "Bond 2",
      description: "This is Bond 2",
      price: 29.99,
      issuer: "XYZ Corporation",
      issueDate: "2023-08-07",
      faceValue: "$2000",
    },
    {
      id: 3,
      name: "Bond 3",
      description: "This is Bond 3",
      price: 39.99,
      issuer: "XYZ Corporation",
      issueDate: "2023-08-07",
      faceValue: "$3000",
    },
    // Add more products
  ];
  return products;
}
export default BondsNames;
