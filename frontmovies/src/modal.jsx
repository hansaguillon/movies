import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>Cerrar</button>
        <h2>{movie.title}</h2>
        <section className="section">
            <p>Año de lanzamiento: {movie.year}</p>
            <p>Director: {movie.director}</p>
            <p>Duración: {movie.duration} minutos</p>
            <p>Género: {movie.genre.join(", ")}</p>
            <p>Valoración: {movie.rate}/10:estrella:</p>
          </section>
      </div>
    </div>
  );
};

export default Modal;