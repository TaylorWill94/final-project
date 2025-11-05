import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <p>Venice</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <p>Contact</p>
      <p>Final Project</p>
    </div>
  );
}

export default Nav;
