import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_PORT;

const CerealsEdit = () => {
  const [cereals, setCereals] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    isFavorite: false,
    rating: 5,
    image_url: "",
  });

  const { index } = useParams();
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setCereals({ ...cereals, [e.target.id]: e.target.value });
  };

  const handleCheckBoxChange = () => {
    setCereals({ ...cereals, isFavorite: cereals.isFavorite });
  };

  const handleImageChange = () => {
    setCereals({ ...cereals, [e.target.image_url]: e.target.value });
  };

  const updateCereal = () => {
    const editCereal = {
      name: cereals.name,
      brand: cereals.brand,
      type: cereals.type,
      price: cereals.price,
      is_favorite: cereals.isFavorite,
      rating: cereals.rating,
      image_url: cereals.image_url,
    };
    try {
      fetch(`${API}/cereals/${index}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editCereal),
      }).then((r) => r.json());
      // if(res.ok){
      navigate(`/cereals/${index}`);
      // };
    } catch (err) {
      return err;
    }
  };

  // fill with data onLoad
  useEffect(() => {
    fetch(`${API}/cereals/${index}`)
      .then((r) => r.json())
      .then((res) => setCereals(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCereal();
  };

  return (
    <>
      <div className="edit-cereal">
        <h3 style={{ textAlign: "center" }}>
          CEREAL KILLAH ID: #00{cereals.id}
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input
            id="name"
            value={cereals.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Cereal Killah Name"
          />

          <label htmlFor="brand"> Brand: </label>
          <input
            id="brand"
            value={cereals.brand}
            type="text"
            onChange={handleTextChange}
            placeholder="Cereal Killah Brand"
          />

          <label htmlFor="type"> Type: </label>
          <input
            id="type"
            value={cereals.type}
            type="text"
            onChange={handleTextChange}
            placeholder="Cereal Killah Type"
          />

          <label htmlFor="price"> Price: </label>
          <input
            id="price"
            value={cereals.price}
            type="number"
            onChange={handleTextChange}
            placeholder="Cereal Killah Price"
          />

          <label htmlFor="isFavorite"> Favorite </label>
          <input
            id="isFavorite"
            type="checkbox"
            value={cereals.isFavorite}
            onChange={handleCheckBoxChange}
            checked={cereals.isFavorite}
          />

          <label htmlFor="rating"></label>
          <input
            id="rating"
            type="number"
            value={cereals.rating}
            onChange={handleTextChange}
            placeholder="Cereal Killah Rating"
          />
          <label htmlFor="image_url"></label>
          <input
            id="image_url"
            type="url"
            // value={cereals.image_url}
            onChange={handleImageChange}
            placeholder="Cereal Killah Image"
          />
        <button type="submit">Update!</button>

        </form>
      </div>
      <div>
        {" "}
        <Link to={`/cereals/${index}`}>
          <button>Neva Mind!</button>
        </Link>
        {/* <Link to={`/cereals/${index}`}> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default CerealsEdit;
