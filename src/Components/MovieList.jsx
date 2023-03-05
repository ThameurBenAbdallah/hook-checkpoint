import { useState } from "react";
import MovieCard from "./MovieCard";
import AddNewMovie from "./AddNewMovie";

const MovieList = ({movies, addMovie, chooseMovie}) => { 

    const [sortBy, setSortBy] = useState('');
    
    

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };


    const sortMovies = (a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (sortBy === "A2Z") {
            return nameA.localeCompare(nameB);
        }
        else if (sortBy === "Z2A" ){
            return nameB.localeCompare(nameA);
        }
        else if (sortBy === 'rating') {
            return b.rating - a.rating;
        } else {
            return 0;
        }
    };
    
    
  const sortedMovies = [...movies].sort(sortMovies);    
    

    return(
        <div>
            <div className="sort-dropdown">
                <label htmlFor="sort-criteria">Sort by:</label>
                <select id="sort-criteria" value={sortBy} onChange={handleSortChange}>
                    <option value="">-- Select criteria --</option>
                    <option value="A2Z">Title from A to Z</option>
                    <option value="Z2A">Title from Z to A</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            <ul>
            
                {sortedMovies.map((movie) => {
                    
                    return (
                        
                        <ul>
                        <MovieCard 
                            key={movie.id}
                            id = {movie.id}
                            name={movie.title} 
                            posterUrl = {movie.posterUrl} 
                            description = {movie.description} 
                            rating = {movie.rating}
                            onMovieClick = {chooseMovie}
                            
                            >
          
                        </MovieCard >      
                        </ul>                  
                    )
                    
                })}
            </ul>
            <div>
                <AddNewMovie onAddMovie = {addMovie}></AddNewMovie>
            </div>
            


        </div>  
    )
};

export default MovieList;


