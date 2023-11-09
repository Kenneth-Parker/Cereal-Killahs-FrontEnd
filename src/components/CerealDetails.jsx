import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/cerealDetails.css";

const API = import.meta.env.VITE_PORT;

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

  //   const [cerImg, setCerImg] = useState("");
  const { index } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    const fetchCereal = async () => {
      try {
        fetch(`${API}/cereals/${index}`)
          .then((r) => r.json())
          .then((res) => {
            setCereals(res);
          });
      } catch (err) {
        return err;
      }
    };
    fetchCereal();
  }, [index]);

  //   useEffect(() => {
  //     const { name } = cereals;
  //   }, [cereals.name]);

  //   useEffect(() => {
  //     setCerImg(cereals.data);
  //   }, []);

  // handleDelete id function - navigate to cereals
  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this object?"
    );
    if (isConfirmed) {
      try {
        fetch(`${API}/cereals/${index}`, {
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

  cereals.isFavorite = cereals.is_favorite;

  return (
    <div>
      <h3>
        {cereals.isFavorite ? <span>⭐️</span> : null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {cereals.name}
      </h3>

      <img src={cereals.image_url} alt={cereals.name} />

      <ul>
        <li>
          <span>Booking Officer:</span> {cereals.brand}
        </li>
        <li>
          <span>Weapon(s):</span> {cereals.type}
        </li>
        <li>
          <span>Charge:</span> ${cereals.price}
        </li>
        <li>
          <span>Sentence:</span> {cereals.rating}
        </li>
      </ul>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/cereals`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/cereals/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
          {/* {!background ? <h1>No such cereal</h1> : null} */}
        </div>
      </div>
    </div>
  );
};

export default CerealDetails;
