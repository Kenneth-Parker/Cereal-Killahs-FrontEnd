import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const appUrl = import.meta.env.VITE_APP_URL;
const port = import.meta.env.VITE_PORT;

function CerealDetails() {
  const [cereal, setCereal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${(port)}/cereals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCereal(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(`${(port)}/cereals/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          navigate('/cereals');
        } else {
          throw new Error('Failed to delete cereal');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="cereal-details">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h3>{cereal.is_favorite ? "⭐️" : null} {cereal.name}</h3>
          <p><img src="https://images.kglobalservices.com/www.specialk.com/en_us/product/product_4508712/prod_img-1135439_prod_img-1135439.png" alt="Cereal Image" /></p>
          <p><img src={cereal.image_url.image} alt="Cereal Image" /></p>
          <img
            src={cereal.image_url.image}
            alt="Cereal Image"
            style={{ width: '100px', height: '100px' }}
          />
          <p>Brand: {cereal.brand}</p>
          <p>Type: {cereal.type}</p>
          <p>Price: ${cereal.price}</p>
          <p>Rating: {cereal.rating}</p>
          <div>
            <Link to={`/cereals`}><button>Back</button></Link>
            <Link to={`/cereals/${id}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CerealDetails;
