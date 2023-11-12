
import { Link } from "react-router-dom";
import './Cereal.css';
import './Cereals.css';

function Cereal({ cereal }) {
  const backgroundColor = {
    backgroundColor: cereal.is_favorite ? "gold" : "transparent",
  };

  return (
    <div className="cereal-card">
      <div className="cereal-image">
        {cereal.is_favorite ? <span>⭐️</span> : null}
      </div>
      <div className="cereal-details">
        <h2><Link to={`/cereals/${cereal.id}`}>{cereal.name}</Link></h2>
        <p><strong>Brand:</strong> {cereal.brand}</p>
        <p><strong>Type:</strong> {cereal.type}</p>
        <p><strong>Price:</strong> ${cereal.price}</p>
        <p><strong>Rating:</strong> {cereal.rating}</p>
      </div>
      <div className="cereal-rating" style={backgroundColor}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default Cereal;
