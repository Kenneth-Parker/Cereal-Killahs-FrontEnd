import { Link } from "react-router-dom";
import './NavBar.css';
import cerealLogo from '../assets/cereal_killahs_logosm.png';

export default function NavBar() {
  return (
    <nav className="grid-container">

      <div className="logo-container">
        <Link to="/">
          <img className="element22" src={cerealLogo} alt="Cereals" style={{ width: '25%', height: 'auto' }} />
        </Link>
      </div>

      <div className="nav-container">
        <h1 className="element1">
          <Link to="/cereals">- C E R E A L S -</Link>
        </h1>
        <button className="element2">
          <Link to="/cereals/new">Add New Cereal</Link>
        </button>
      </div>
    </nav>
  );
}
