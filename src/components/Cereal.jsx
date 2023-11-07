import { Link } from "react-router-dom";

function Cereal({ cereal }) {
  return (
    <tr>
      {/* <td>
        {cereal.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td> */}
      <td>
        <Link to={`/cereals/${cereal.id}`}> {cereal.name}</Link>
      </td>
    
    </tr>
  );
}

export default Cereal;
