import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_APP_URL;
const API = import.meta.env.VITE_PORT;

function CerealEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cereal, setCereal] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    is_favorite: false,
    rating: 5,
    image_url: "",
  });

  const handleTextChange = (event) => {
    setCereal({ ...cereal, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCereal({ ...cereal, is_favorite: !cereal.is_favorite });
  };

  // Update a cereal. Redirect to show view
  const updateCereal = () => {
    fetch(`${API}/cereals/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cereal)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate(`/cereals/${id}`);
      });
  };

  // On page load, fill in the form with the cereal data.
  useEffect(() => {
    fetch(`${API}/cereals/${id}`)
      .then((res) => res.json())
      .then((res) => setCereal(res));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCereal();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={cereal.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Cereal"
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          value={cereal.brand}
          type="text"
          onChange={handleTextChange}
          placeholder="Brand of Cereal"
          required
        />

        <label htmlFor="type">Type:</label>
        <input
          id="type"
          value={cereal.type}
          type="text"
          onChange={handleTextChange}
          placeholder="Type of Cereal"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={cereal.price}
          type="number"
          step="0.01"
          onChange={handleTextChange}
          placeholder="Price of Cereal"
          required
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={cereal.is_favorite}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={cereal.rating}
          type="number"
          min="0"
          max="5"
          step="1"
          onChange={handleTextChange}
          placeholder="Rating"
          required
        />

        <label htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          value={cereal.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Image URL of Cereal"
          required
        />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/cereals/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default CerealEditForm;
