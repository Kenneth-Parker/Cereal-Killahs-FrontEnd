import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_URL;

const CerealsEdit = () => {
  const [cereals, setCereals] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    isFavorite: false,
    rating: 5,
  });

  const { index } = useParams();
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setCereals({ ...cereals, [e.target.id]: e.target.value });
  };

  const handleIsFavorite = () => {
    setCereals({ ...cereals, isFavorite: !cereals.isFavorite });
  };


  
  return (
    <div className="edit-cereal">
      <form>
        <label htmlFor="name"> Name: </label>
        <input type="text" />

        <label htmlFor="brand"> Brand: </label>
        <input type="text" />

        <label htmlFor="type"> Type: </label>
        <input type="text" />

        <label htmlFor="price"> Price: </label>
        <input type="number" />

        <label htmlFor="isFavorite"></label>
        <input type="checkbox" />

        <label htmlFor="rating"></label>
        <input type="color" />
      </form>
    </div>
  );
};
