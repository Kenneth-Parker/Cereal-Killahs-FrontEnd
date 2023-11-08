import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_APP_URL;

function CerealNewForm() {
  const navigate = useNavigate();
  const [cereal, setCereal] = useState({
    name: "",
    brand: "",
    type: "",
    price: "",
    is_favorite: false, 
    rating: 0, 
  });

  // Add a cereal. Redirect to the index view.
  const addCereal = () => {
    try {
      fetch(`${API}/cereals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cereal)
      })
        .then(res => res.json())
        .then(() => navigate('/cereals'))
    } catch (error) {
      return error
    }
  };

  const handleTextChange = (event) => {
    setCereal({ ...cereal, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCereal({ ...cereal, is_favorite: !cereal.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCereal();
  };

  return (
    <div className="New">
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

        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
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
          placeholder="Rating of Cereal"
          required
        />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/cereals`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default CerealNewForm;
