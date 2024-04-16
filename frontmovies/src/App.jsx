import { useState,useEffect } from 'react'
import Modal from './modal';


function App() {
  const [movies,setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [movieActual,setMovieActual] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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

    setMovieActual(movie);
    openModal();

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
          
        </article>
          ))
        }
        <div className="app-container">
      <Modal isOpen={isOpen} onClose={closeModal} movie={movieActual}>

      </Modal>
    </div>
        
      
      
  </div>
  

  )
 
  
}

export default App
