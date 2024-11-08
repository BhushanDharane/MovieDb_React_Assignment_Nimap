import React, { useState } from 'react';
import MovieService from '../services/MovieService';
//import './SearchPage.css';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        const results = await MovieService.searchMovies(searchTerm);
        setSearchResults(results);
    };

    return (
        <div className="search-page">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch}>Search</button>
            <div className="movie-grid">
                {searchResults.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;