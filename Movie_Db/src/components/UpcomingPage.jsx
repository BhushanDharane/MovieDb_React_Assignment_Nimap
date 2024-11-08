import React, { useState, useEffect } from 'react';
import MovieService from '../services/MovieService';

const UpcomingPage = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            const movies = await MovieService.getUpcomingMovies();
            setUpcomingMovies(movies);
        };

        fetchUpcomingMovies();
    }, []);

    return (
        <div className="upcoming-page">
            <h1>Upcoming Movies</h1>
            <div className="movie-grid">
                {upcomingMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingPage;