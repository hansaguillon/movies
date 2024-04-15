import { useState,useEffect } from 'react'



function App() {
  const [movies,setMovies] = useState([]);



  const getMovies = async() =>{
    const url = `http://localhost:3000/movies`;
    const res = await fetch(url);
    const mov = await res.json();
    return mov.movies;

  }
 

 
 useEffect(() =>{
    const fecthMovies = async () => {
      const mov = await getMovies();

      setMovies(mov);

    };
    fecthMovies();

  }, [])
  const handleMovieClick = (movie) => {

    console.log(movie.title);
  }


  return (
    
    <div className='cars'>
      
        {
          movies.map(mov => (
            <article key={mov.id} className="card" onClick={() => handleMovieClick(mov)}>
          {" "}
          <header>
            <h1 className='title'>{mov.title}</h1>
          </header>
          <picture>
            <img src={mov.poster} className="poster" />
          </picture>
          <section className="section">
            <p>Año de lanzamiento: {mov.year}</p>
            <p>Director: {mov.director}</p>
            <p>Duración: {mov.duration} minutos</p>
            <p>Género: {mov.genre.join(", ")}</p>
            <p>Valoración: {mov.rate}/10:estrella:</p>
          </section>
        </article>
          ))
        }
         
      
  </div>


  )
 
  
}

export default App
