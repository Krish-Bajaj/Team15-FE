import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const ListMain = () => {
  const [tp, setTp] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        // console.log(response.data);
        setTp(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="list">
      <div className="near">
        <h4>Near Maturity Bonds</h4>
        {tp.Near_matured?.map((bond) => (
          <div key={bond._id} style={{ margin: "3%", color: "white" }}>
            <div class="list-group" style={{ flexDirection: "row" }}>
              <a
                class="list-group-item list-group-item-action "
                style={{ color: "white" }}
              >
                <Link to={`/bonds/${bond._id}`}> {bond.issuer} </Link>
              </a>
              <a class="list-group-item list-group-item-action">
                {bond.facevalue} Lakh
              </a>
              <a class="list-group-item list-group-item-action disabled">
                {bond.maturitydate}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mature" style={{ marginTop: "2rem" }}>
        <h4>Matured Bonds</h4>

        {tp.Matured?.map((bond) => (
          <div key={bond._id} style={{ margin: "3%", color: "white" }}>
            <div class="list-group" style={{ flexDirection: "row" }}>
              <a
                class="list-group-item list-group-item-action "
                style={{ color: "white" }}
              >
                <Link to={`/bonds/${bond._id}`}> {bond.issuer} </Link>
              </a>
              <a class="list-group-item list-group-item-action">
                {bond.facevalue} Lakh
              </a>
              <a class="list-group-item list-group-item-action disabled">
                {bond.maturitydate}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="not_matured" style={{ marginTop: "2rem" }}>
        <h4>Non Matured Bonds</h4>

        {tp.Not_matured?.map((bond) => (
          <div key={bond._id} style={{ margin: "3%", color: "white" }}>
            <div class="list-group" style={{ flexDirection: "row" }}>
              <a
                class="list-group-item list-group-item-action "
                style={{ color: "white" }}
              >
                <Link to={`/bonds/${bond._id}`}> {bond.issuer} </Link>
              </a>
              <a class="list-group-item list-group-item-action">
                {bond.facevalue} Lakh
              </a>
              <a class="list-group-item list-group-item-action disabled">
                {bond.maturitydate}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMain;
