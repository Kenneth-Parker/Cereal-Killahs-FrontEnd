  
import { useState, useEffect } from "react";
// import Cereal from "./Cereal";
import './Cereals.css';
import './Cereal.css';

const appUrl = import.meta.env.VITE_APP_URL;
const port = import.meta.env.VITE_PORT;

function Cereals() {
  const [cereals, setCereals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${port}/cereals`);
        if (response.ok) {
          const data = await response.json();
          setCereals(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cereal-cards">
      {cereals.map((cereal) => (
        <Cereal key={cereal.id} cereal={cereal} />
      ))}
    </div>
  );
}

export default Cereals;
