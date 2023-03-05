import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const MovieCard = ({ id, name, description, posterUrl, rating, onMovieClick }) => {
  const fullStars = Math.floor(rating / 2);
  const halfStars = Math.round(rating / 2) - fullStars;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="movie-card" onClick={() => onMovieClick(id)}>
      <Link to={`/movies/${id}`}>
      <div className="movie-poster">
        <img src={posterUrl} alt={name} />
      </div>
      </Link>
      <div className="movie-info">
        <h2 className="movie-title">{name}</h2>
        <p className="movie-description">{description}</p>
        <div className="movie-rating">
          {/* Display full stars */}
          {Array.from({ length: fullStars }, (_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
          ))}
          {/* Display half stars */}
          {Array.from({ length: halfStars }, (_, i) => (
            <FontAwesomeIcon key={i} icon={faStarHalfAlt} style={{ color: "gold" }} />
          ))}
          {/* Display empty stars */}
          {Array.from({ length: emptyStars }, (_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} style={{ color: "light grey" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
