import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme, dark } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>

      <button onClick={toggleTheme}>
  {dark ? "🌙 Dark" : "☀️ Light"}
</button>

    </div>
  );
}
