// import { Link } from "react-router-dom";
// import './NavBar.css'


// export default function NavBar() {
//   return (
//     <nav class="flex-container">
//        <Link to="/cereals">
//         <img src="" alt="Cereals" /> {/* Specify the image file path here */}
//       </Link>
//       <h1 class="element1">
//         <Link to="/cereals">Cereals</Link>
//       </h1>
//       <button class="element2">
//         <Link to="/cereals/new">Add New Cereal</Link>
//       </button>
//     </nav>
//   );
// }




// import { Link } from "react-router-dom";
// import './NavBar.css'
// import cerealLogo from '../assets/cereal_killahs_logosm.png'; // Replace with the correct path to your image

// export default function NavBar() {
//   return (
//     <nav >
//       <div>
//         <Link to="/">
//           <img className="element22" src={cerealLogo} alt="Cereals" style={{ width: '22%', height: 'auto' }} />
//         </Link>
//       </div>
//       <br />
//       <br />
//       <div className="flex-container">
//         <h1 className="element1">
//           <Link to="/cereals">Cereals</Link>
//         </h1>
//         <button className="element2">
//           <Link to="/cereals/new">Add New Cereal</Link>
//         </button>
//       </div>
//     </nav>
//   );
// }

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
