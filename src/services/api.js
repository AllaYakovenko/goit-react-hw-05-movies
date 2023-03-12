import axios from 'axios';

const moviesAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = '19de3f69b689775c27a0f6800fa7a97e';


// movies trending  список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const fetchMoviesTrending = async () => {
    const response = await moviesAPI.get('/trending/movie/day?', {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.results;
}

// movie search пошук фільму за ключовим словом на сторінці фільмів.
export const fetchMovieSearch = async (searchQuery) => {
    const response = await moviesAPI.get('/search/movie?', {
        params: {
            api_key: API_KEY,
            query: searchQuery,
        },
    });

    return response.data.results;
}

// movie info запит повної інформації про фільм для сторінки кінофільму.
export const fetchMovieInfo = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data;
}

//  Movie Cast запит інформації про акторський склад для сторінки кінофільму.
export const fetchMovieCast = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}/credits?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.cast;
}

// Movie Reviews запит оглядів для сторінки кінофільму.
export const fetchMovieReviews = async (id) => {
    const response = await moviesAPI.get(`/movie/${id}/reviews?`, {
        params: {
            api_key: API_KEY,
        },
    });

    return response.data.results;
}

const api = {
    fetchMoviesTrending,
    fetchMovieSearch,
    fetchMovieInfo,
    fetchMovieCast,
    fetchMovieReviews,
}

export default api;