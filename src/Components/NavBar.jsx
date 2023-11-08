import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/cereals">Cereals</Link>
      </h1>
      <button>
        <Link to="/cereals/new">Add New Cereal</Link>
      </button>
    </nav>
  );
}