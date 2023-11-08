import { useState, useEffect } from "react";
import Cereal from "./Cereal";

const appUrl = import.meta.env.VITE_APP_URL;
const port = import.meta.env.VITE_PORT;

function Cereals() {
  const [cereals, setCereals] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${port}/cereals`)
        .then(res => res.json())
        .then(res => {
          setCereals(res)
        })
    } catch (error) {
      return error
    }
  }

  // GET all Cereals
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="Cereals">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cereal.is_favorite ? "Yes" : "No"}</td>
              <td>{cereal.name}</td>
              <td>{cereal.brand}</td>
              <td>{cereal.type}</td>
              <td>${cereal.price}</td>
              <td>{cereal.rating}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
  
}

export default Cereals;
  