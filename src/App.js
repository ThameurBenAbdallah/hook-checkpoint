import './App.css';
import { useState , useEffect } from "react";
import MovieList from './Components/MovieList';
import MoviesNavbar from './Components/NavBar';
import movieListObject from './movieListObject';
import { Route , Routes} from 'react-router-dom';
import MovieDetail from './Components/MovieDetail';
import AboutUs from './Components/AboutUs';






function App() {
  const [movies, setMovies] = useState(movieListObject);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  const handleMovieClick = (id) => {
    const movie = movies.find((movie) => movie.id === id);
    setSelectedMovie(movie);
  };

  const searchMovie = (value) =>{
    setQuery(value)    
  }

  useEffect(() => {
    if (query&&query!=="") {
      // filter movies array based on the query
      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
      // update the `results` state variable with the filtered movies
      setResults(filteredMovies);
      
    } else if (query ==="")  {
      console.log("query")

      setResults(movies);      
    }
  }, [query]);
  console.log(""=== false)
  return (
    <div className="App">
      <div>

        <MoviesNavbar onSearchMovie={searchMovie}></MoviesNavbar>

      </div>
      <div className='container'>
        <Routes>
            <Route path = "/" element = {<MovieList movies={results} addMovie={addMovie} chooseMovie ={handleMovieClick} />}></Route>
            <Route path="/movies/:id" element={<MovieDetail movie = {selectedMovie} />} />
            <Route path = "/about" element = {<AboutUs />}></Route>

        </Routes>
       
       
      
      </div>
    </div>
  );
  
  
  
}

export default App;
