import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
   return (
      <div className="navBar">
         <nav>
            <Link className="linkTitle" to="/">
               Aller à l'accueil
            </Link>
         </nav>
         <nav>
            <Link className="linkTitle" to="/Search">
               Rechercher un article
            </Link>
         </nav>
      </div>
   );
}

export default Menu;
