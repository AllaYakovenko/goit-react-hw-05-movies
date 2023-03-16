
import MovieList from 'components/MovieList/MovieList';
import { Loader } from "../../components/Loader/Loader";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from '../../services/api';

const Home = () => {
    const [moviesTrending, setMoviesTrending] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    // const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //     const getMoviesTrending = async () => {
    //         try {
    //             let moviesTrending = await api.fetchMoviesTrending();
    //             moviesTrending = moviesTrending.map(movie => {
    //                 return movie = {
    //                     id: movie.id,
    //                     title: movie.title,
    //                 }
    //             });
    //             setMoviesTrending(moviesTrending);
    //         } catch (error) {
    //             console.log(error);
    //             setIsError(true);
    //         }
    //     }
    //     getMoviesTrending();
    // }, [])

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
            {/* {moviesTrending?.length !== 0 &&
                <ul>
                    {moviesTrending?.map(({ id, title}) => (
                        <li key={id}>
                            <TrendMovieLink to={`movies/${id}`}>
                                {title}
                            </TrendMovieLink>
                        </li>
                    ))}
                </ul>
          } */}
            {isLoading && <Loader />}
            {error && toast.error("We have error!")}
            {moviesTrending && <MovieList items={moviesTrending} />}
        </section>

    )
}

export default Home;