import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const ListMain = () => {
  const [tp, setTp] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        // console.log(response.data);
        // tp = response.data;
        setTp(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   console.log(tp);

  return (
    <div className="list">
      <div className="near">
        <h4>Near Maturity Bonds</h4>

        {tp.Near_matured?.map((bond) => (
          <Button variant="outlined" className="btn-space">
            <h3>{bond.issuer}</h3>
          </Button>
        ))}
      </div>

      <div className="mature" style={{ marginTop: "2rem" }}>
        <h4>Matured Bonds</h4>

        {tp.Matured?.map((bond) => (
          <Button variant="outlined" className="btn-space">
            <h3>{bond.issuer}</h3>
          </Button>
        ))}
      </div>

      <div className="not_matured" style={{ marginTop: "2rem" }}>
        <h4>Non Matured Bonds</h4>

        {tp.Not_matured?.map((bond) => (
          <Button variant="outlined" className="btn-space">
            <h3>{bond.issuer}</h3>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ListMain;
