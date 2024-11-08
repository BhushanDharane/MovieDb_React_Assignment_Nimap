import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';
//import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movieDetails = await MovieService.getMovieDetails(id);
            setMovie(movieDetails);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details-page">
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
        </div>
    );
};

export default MovieDetailsPage;