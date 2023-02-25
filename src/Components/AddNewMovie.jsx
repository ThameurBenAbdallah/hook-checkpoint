import { useState } from "react";


const AddMovieForm = ({ onAddMovie }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [rating, setRating] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newMovie = { id: Math.random(), title:name, description:description, posterUrl: posterUrl, rating: rating };
      onAddMovie(newMovie);
      setName('');
      setDescription('');
      setPosterUrl('');
      setRating('');
    };
  
    return (
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    );
  };
  
  export default AddMovieForm;