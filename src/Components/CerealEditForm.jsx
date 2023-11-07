import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function CerealEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [cereal, setCereal] = useState({
    name: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setCereal({ ...cereal, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCereal({ ...cereal, isFavorite: !cereal.isFavorite });
  };

  // Update a cereal. Redirect to show view
  const updateCereal = () => {
    fetch(`${API}/cereals/${index}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cereal)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        navigate(`/cereals/${index}`)
      })
  };

  // On page load, fill in the form with the cereal data.
  useEffect(() => {
    fetch(`${API}/cereals/${index}`)
      .then(res => res.json())
      .then(res => setCereal(res))
  }, [])

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
      <Link to={`/cereals/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default CerealEditForm;