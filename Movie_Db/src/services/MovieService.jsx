const API_URL = 'https://www.themoviedb.org/documentation/api'; 

const MovieService = {
    getPopularMovies: async () => {
        const response = await fetch(`${API_URL}/popular`);
        return response.json();
    },
    getTopRatedMovies: async () => {
        const response = await fetch(`${API_URL}/top-rated`);
        return response.json();
    },
    getUpcomingMovies: async () => {
        const response = await fetch(`${API_URL}/upcoming`);
        return response.json();
    },
    getMovieDetails: async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        return response.json();
    },
    searchMovies: async (query) => {
        const response = await fetch(`${API_URL}/search?query=${query}`);
        return response.json();
    }
};

export default MovieService;