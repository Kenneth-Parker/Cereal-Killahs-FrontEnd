import React, { useState, useEffect } from 'react';

function DisplayCereals({ cereals }) {
  return (
    <div>
      <h2>Cereals</h2>
      <ul>
        {cereals.map((cereal) => (
          <li key={cereal.id}>
            {cereal.name}: ${cereal.price}
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
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/cereals`);
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
      <h2>Index</h2>
      <DisplayCereals cereals={cereals} />
    </div>
  );
}

export default Index;
