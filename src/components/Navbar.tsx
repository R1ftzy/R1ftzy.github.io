import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>R1ftzy</h2>
      <ul>
        <Link to="/" viewTransition>
          Home
        </Link>
        <Link to="/projects" viewTransition>
          Projects
        </Link>
        <Link to="/contacts" viewTransition>
          Contact
        </Link>
      </ul>
    </nav>
  );
}
