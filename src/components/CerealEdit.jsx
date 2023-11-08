import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_URL;

const CerealsEdit = () => {
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
