
import React, { useState, useEffect } from 'react';
import MovieService from '../services/MovieService';


const TopRatedPage = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const movies = await MovieService.getTopRatedMovies();
            setTopRatedMovies(movies);
        };

        fetchTopRatedMovies();
    }, []);

    return (
        <div className="top-rated-page">
            <h1>Top Rated Movies</h1>
            <div className="movie-grid">
                {topRatedMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default TopRatedPage;