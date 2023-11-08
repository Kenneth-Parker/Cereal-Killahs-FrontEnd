import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/cerealDetails.css'

const API = import.meta.env.VITE_URL;

const CerealDetails = () => {
  const [cereals, setCereals] = useState({ name: "" });
  const { index } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    const fetchCereal = async () => {
      try {
        fetch(`${API}/cereals/${index}`)
          .then((r) => r.json())
          .then((res) => setCereals(res));
      } catch (err) {
        return err;
      }
    };
    fetchCereal();
  }, [index]);

  useEffect(() => {
    const { name } = cereals;
  }, [cereals.name]);

// handleDelete id function - navigate to cereals
const handleDelete = () => {
    try {
      fetch(`${API}/cereals/${index}`, {
        method: "DELETE",
      }).then(() => navigate(`/cereals`));
    } catch (err) {
      return err;
    }
  };
  cereals.isFavorite =  cereals.is_favorite

//   numberNoHyphens = number.replace(/-/g,"")
  return (
    <>
      <h2>Hellloooooo it's me 1 cereal : how to get isFAvorite to show</h2>

      <h3>
        {cereals.isFavorite ? <span>⭐️</span> : null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {cereals.name}
      </h3>

      <ul>
        <li>Brand: {cereals.brand}</li>
        <li>Type: {cereals.type}</li>
        <li>Price: ${cereals.price}</li>
        <li>Rating: {cereals.rating}</li>
        <li>Image: <img src={cereals.image} /></li>
      </ul>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/cereals`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/cereals/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
          {/* {!background ? <h1>No such cereal</h1> : null} */}
        </div>
      </div>
    </>
  );
};

export default CerealDetails;
