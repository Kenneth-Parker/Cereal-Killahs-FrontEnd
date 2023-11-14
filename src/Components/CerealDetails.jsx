import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CerealDetails.css";

const API = import.meta.env.VITE_APP_URL;
// const API = import.meta.env.VITE_PORT;

const CerealDetails = () => {
  const [cereals, setCereals] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    isFavorite: false,
    rating: 5,
    image_url: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCereal = async () => {
      try {
        fetch(`${API}/cereals/${id}`)
          .then((r) => r.json())
          .then((res) => {
            setCereals(res);
          });
      } catch (err) {
        return err;
      }
    };
    fetchCereal();
  }, [id]);

  const handleDelete = () => {
    const isConfirmed = window.confirm( 
      "👀 Are u sure u want to delete this jawn?"
    );
    if (isConfirmed) {
     navigator.vibrate(222)

      try {
        navigator.vibrate(300);

        fetch(`${API}/cereals/${id}`, {
          method: "DELETE",
        }).then(() => navigate(`/cereals`));
      } catch (err) {
        return err;
      }
    } else {
      // User clicked NeverMind, do nothing or show a message
      console.log("Deletion canceled by user");
    }
  };

  return (
    <div className="cereal-details">
      <>
        <h3>
          {cereals.is_favorite ? "⭐️" : null} {cereals.name}
        </h3>
        <img
          src={cereals.image_url}
          alt="cereals Image"
          style={{ width: "475px", height: "auto" }}
        />
        <p>Brand: {cereals.brand}</p>
        <p>Type: {cereals.type}</p>
        <p>Price: ${cereals.price}</p>
        <p>Rating: {cereals.rating}</p>
        <div>
          <Link to={`/cereals`}>
            <button>Back</button>
          </Link>
          <Link to={`/cereals/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </>
    </div>
  );
};

export default CerealDetails;
