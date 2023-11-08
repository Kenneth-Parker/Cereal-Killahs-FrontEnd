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
            // Set the cereals state with the extracted image URL

            setCereals(res);
            //         if (res.id) {
            //             setCerImg(res.data.image)
            //         } else {
            //             // stringify
            //                     console.log("Image Path:", res.data.image);

            //         console.log("Image data  Path:", res.image_url)
            //         // console.log("Image Path:", res.data.image)
            //   }
          });
      } catch (err) {
        return err;
      }
    };
    fetchCereal();
  }, [index]);

  //   const showImage = (imagePath) => {
  //     // Update the selectedImage state to display the clicked cereal's image
  //     setCerImg(imagePath);
  //   };

  //   useEffect(() => {
  //     const { name } = cereals;
  //   }, [cereals.name]);

  //   useEffect(() => {
  //     setCerImg(cereals.data);
  //   }, []);

  // handleDelete id function - navigate to cereals
  const handleDelete = () => {
    try {
      fetch(`${API}/cereals/${index}`, {
        method: "DELETE",
      }).then(() => navigate(`/cereals`));
    } catch (err) {
      return err;
    }
  };

  cereals.isFavorite = cereals.is_favorite;
  //   numberNoHyphens = number.replace(/-/g,"")
  //    imageUrl = cereals.data.image || "src/assets/honey-nut-cheerios.webp";

  //
  // render cereals.name checking id
  return (
    <>
      <h3>
        {cereals.isFavorite ? <span>⭐️</span> : null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {cereals.name}
      </h3>
      <img src={cereals.image_url} alt={cereals.name} />
      {/* <img src={cereals.data.image} alt={cereals.name} /> */}

      <ul>
        <li>Brand: {cereals.brand}</li>
        <li>Type: {cereals.type}</li>
        <li>Price: ${cereals.price}</li>
        <li>Rating: {cereals.rating}</li>
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
    </>
  );
};

export default CerealDetails;
