const MovieCard = ({name, description, posterUrl, rating }) => {
    return (
      <div className="movie-card">
        <div className="movie-poster">
          <img src={posterUrl} alt={name} />
        </div>
        <div className="movie-info">
          <h2 className="movie-title">{name}</h2>
          <p className="movie-description">{description}</p>
          <p className="movie-rating">IMDb rating: {rating}/10</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;