import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const appUrl = import.meta.env.VITE_APP_URL;

function CerealEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cereal, setCereal] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    is_favorite: false,
    rating: 0,
  });

  const handleTextChange = (e) => {
    setCereal({ ...cereal, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setCereal({
      ...cereal,
      is_favorite: !cereal.is_favorite,
    });
  };

  const updateCereal = async () => {
    try {
      const response = await fetch(`${appUrl}/cereals/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cereal),
      });

      if (response.ok) {
        navigate(`/cereals/${id}`);
      } else {
        console.error("Cereal update failed:", response.status);
      }
    } catch (error) {
      console.error("Error while updating cereal:", error);
    }
  };

  useEffect(() => {
    const fetchCerealData = async () => {
      try {
        const response = await fetch(`${appUrl}/cereals/${id}`);
        if (response.ok) {
          const cerealData = await response.json();
          
          const updatedCerealData = {
            ...cereal,
            ...cerealData,
          };
          setCereal(updatedCerealData);
        } else {
          console.error("Failed to fetch cereal data:", response.status);
        }
      } catch (error) {
        console.error("Error while fetching cereal data:", error);
      }
    };
    fetchCerealData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCereal();
  };

  return (
    <div className="CerealEditForm">
      <h1>Edit Cereal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={cereal.name}
          type="text"
          onChange={handleTextChange}
          placeholder={`${cereal.name}`}
          required
        />
        <br />
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          value={cereal.brand}
          type="text"
          onChange={handleTextChange}
          placeholder="Brand"
        />
        <br />
        <label htmlFor="type">Type:</label>
        <input
          id="type"
          value={cereal.type}
          type="text"
          onChange={handleTextChange}
          placeholder="Type"
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={cereal.price}
          type="number"
          step="0.01"
          onChange={handleTextChange}
          placeholder="Price"
        />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={cereal.rating}
          type="number"
          step="1"
          onChange={handleTextChange}
          placeholder="Rating"
        />
        <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={cereal.is_favorite}
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
