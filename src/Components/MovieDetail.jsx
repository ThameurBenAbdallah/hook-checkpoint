import ReactPlayer from 'react-youtube';


function MovieDetail({ movie }) {
  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
    return (
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <ReactPlayer
  videoId={movie.trailerLink}
  opts={{
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  }}
  onReady={onReady}
/>

        
      </div>
    );
  }
  export default MovieDetail;
