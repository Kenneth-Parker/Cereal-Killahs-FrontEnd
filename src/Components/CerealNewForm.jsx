import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function CerealNewForm() {
  const navigate = useNavigate();
  const [cereal, setCereal] = useState({
    name: "",
    isFavorite: false,
  });

  // Add a cereal. Redirect to the index view.
  const addCereal = () => {
    const cerealData = { 
      name: cereal.name, 
      is_favorite: cereal.isFavorite
    }
    try {
      fetch(`${API}/cereals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cerealData)
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
    setCereal({ ...cereal, isFavorite: !cereal.isFavorite });
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

        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={cereal.isFavorite}
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