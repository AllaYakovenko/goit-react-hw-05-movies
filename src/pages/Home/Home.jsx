import { TrendMovieLink } from "./Home.styled";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from '../../services/api';

const Home = () => {
    const [moviesTrending, setMoviesTrending] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getMoviesTrending = async () => {
            try {
                let moviesTrending = await api.fetchMoviesTrending();
                moviesTrending = moviesTrending.map(movie => {
                    return movie = {
                        id: movie.id,
                        title: movie.title,
                    }
                });
                setMoviesTrending(moviesTrending);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }
        }
        getMoviesTrending();
    }, [])

  return (
      
        <section>
            <h2>Trending today</h2>
            {moviesTrending?.length !== 0 &&
                <ul>
                    {moviesTrending?.map(({ id, title}) => (
                        <li key={id}>
                            <TrendMovieLink to={`movies/${id}`}>
                                {title}
                            </TrendMovieLink>
                        </li>
                    ))}
                </ul>
            }
            {isError && toast.error("We have error!")}
        </section>

    )
}

export default Home;