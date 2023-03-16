
import MovieList from 'components/MovieList/MovieList';
import { Loader } from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from '../../services/api';

const Home = () => {
    const [moviesTrending, setMoviesTrending] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const getMoviesTrending = async () => {
            try {
                const data = await api.fetchMoviesTrending();
                setMoviesTrending(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        getMoviesTrending();
    }, []);

  return (
      
        <section>
            <h2>Trending today</h2>
            {isLoading && <Loader />}
            {error && toast.error("We have error!")}
            {moviesTrending && <MovieList movies={moviesTrending} />}
        </section>

    )
}

export default Home;