import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function Card({ id, title, desc, img, rating }) {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoriteContext);

  const isFav = favorites.find((f) => f.id === id);

  return (
    <div className="modern-card">
      <div className="img-wrapper">
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <div className="no-img">No Image</div>
        )}
      </div>

      <div className="card-content">
        <h3>{title}</h3>

        {rating && (
          <div className="rating">⭐ {rating}</div>
        )}

        <p>
          {desc
            ? desc.slice(0, 120) + "..."
            : "No description available"}
        </p>

        <button
          className="fav-btn"
          onClick={() =>
            isFav
              ? removeFavorite(id)
              : addFavorite({ id, title, desc, img, rating })
          }
        >
          {isFav ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}
