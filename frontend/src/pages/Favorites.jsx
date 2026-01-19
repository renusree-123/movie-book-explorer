import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import Card from "../components/Card";

export default function Favorites() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="container">
      <h2>Your Favorites</h2>

      <div className="grid">
        {favorites.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
