import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>R1ftzy</h2>
      <ul>
        <Link to="/" viewTransition>Home</Link>
        <Link to="/projects" viewTransition>
          Projects
        </Link>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
