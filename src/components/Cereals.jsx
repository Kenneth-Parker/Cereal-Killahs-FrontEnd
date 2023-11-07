import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cereal from "./Cereal";

const Cereals = () => {
  const API = import.meta.env.VITE_URL;
  const [cereals, setCereals] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/cereals`)
        .then((r) => r.json())
        .then((res) => setCereals(res));
    } catch (err) {
      return err;
    }
  };
  // GET all cereals
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cereals-list-container CLC">

      <h2>Cereals Killahs List</h2>
      {cereals.map((cereal) => {
        return <Cereal key={cereal.id} cereal={cereal} />;
      })}
      
    </div>
  );
};

export default Cereals;
