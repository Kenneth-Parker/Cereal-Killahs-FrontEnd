import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function CerealDetails() {
  const [cereal, setCereal] = useState({ name: "" });
  const [background, setBackground] = useState("");
  let navigate = useNavigate();
  let { index } = useParams();

  // On page load, load cereal details
  useEffect(() => {
    const fetchCereal = async () => {
      try {
        fetch(`${API}/cereals/${index}`)
        .then(res => res.json())
        .then(res => {
          setCereal(res)
        })
      } catch (error) {
        return error
      }
    }
    fetchCereal()
  }, [index])

  // Be able to delete a cereal. Return to index view.
  const handleDelete = () => {
    fetch(`${API}/cereals/${index}`, {
      method: 'DELETE'
    })
      .then(() => navigate('/cereals'))
  };
  useEffect(() => {
    const { name } = cereal;
    setBackground(CSS.supports("cereal", name.toLowerCase()));
  }, [cereal.name]);

  return (
    <article
      style={{ backgroundCereal: cereal.name }}
      className={!background ? "no-such-cereal" : null}
    >
      <h3>
        {cereal.isFavorite ? <span>⭐️</span> : null}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {cereal.name}
      </h3>

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
          {!background ? <h1>No such cereal</h1> : null}
        </div>
      </div>
    </article>
  );
}

export default CerealDetails;