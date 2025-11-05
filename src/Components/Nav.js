import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <p className="block">Home</p>
      </Link>
      <Link to="/about">
        <p className="block">About</p>
      </Link>
      <Link to="/final">
        <p className="block">Final Project</p>
      </Link>
    </div>
  );
}

export default Nav;
