import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
          <div key={bond._id}>
            <Link to={`/bonds/${bond._id}`}> {bond.issuer} </Link>
          </div>
        ))}
      </div>

      <div className="mature" style={{ marginTop: "2rem" }}>
        <h4>Matured Bonds</h4>

        {tp.Matured?.map((bond) => (
          <div key={bond._id} >
            <Link to={`/bonds/${bond._id}`}> {bond.issuer} </Link>
          </div>
        ))}       
      </div>

      <div className="not_matured" style={{ marginTop: "2rem" }}>
        <h4>Non Matured Bonds</h4>

        {tp.Not_matured?.map((bond) => (
          <div key={bond._id} >
            <Link to={`/bonds/${bond._id}`}> {bond.issuer} </Link>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ListMain;
