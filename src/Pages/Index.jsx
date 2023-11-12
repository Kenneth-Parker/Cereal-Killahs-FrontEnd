import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css"

// const API = import.meta.env.VITE_APP_URL;
const API = import.meta.env.VITE_PORT;

function DisplayCereals({ cereals }) {
  return (
    <div>
      {/* <h2>Cereals</h2> */}
      <ul>
        {cereals.map((cereal) => (
          <li key={cereal.id}>
            <Link to={`/cereals/${cereal.id}`}>
              <img
                src={cereal.image_url}
                alt="cereals Image"
                style={{ width: '75px', height: 'auto' }}
              />
             <br />  {cereal.name}: {cereal.price}
            </Link>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}


function Index() {
  const [cereals, setCereals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}/cereals`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCereals(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="Index">
      <DisplayCereals cereals={cereals} />
    </div>
  );
}

export default Index;
