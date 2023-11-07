import { Link } from "react-router-dom";

function Cereal({ cereal }) {
  return (
    <tr>
      <td>
        {cereal.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/cereals/${cereal.id}`}>{cereal.name}</Link>
      </td>
      <td>
        <span style={{ backgroundColor: cereal.name }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </td>
      <td>{cereal.brand}</td>
      <td>{cereal.type}</td>
      <td>${cereal.price}</td>
      <td>Rating: {cereal.rating}</td>
    </tr>
  );
}

export default Cereal;
