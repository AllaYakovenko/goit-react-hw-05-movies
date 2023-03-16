import { SearchForm, SearchButton, SearchInput, MovieLink} from "./Movies.styled";
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from "../../components/Loader/Loader";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from 'services/api';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const searchQuery  = searchParams.get('query');
    const location = useLocation();

    useEffect(() => {
    setIsLoading(true);

    if (!searchQuery ) {
      return;
    }
        const getMovies = async () => {
            try {
                let movies = await api.fetchMovieSearch(searchQuery );
                movies = movies.map(movie => {
                    return movie = {
                        id: movie.id,
                        title: movie.title,
                    }
                });
                setMovies(movies);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getMovies();
    }, [searchQuery])

    const handleChange = ({ target: { value } }) => {
        setQuery(value.trim());
    };

    const handleSubmit = event => {
        event.preventDefault();

        setSearchParams({ query });
        if (query.trim() === '') {
            toast.error("Enter a keyword to search for a movie");
            return;
        }
        event.target.reset();
    };

    return (
        <section>
            <SearchForm onSubmit={handleSubmit}>
                <SearchButton type="submit">
                    <FaSearch size={32}/>
                </SearchButton>

                <SearchInput
                    type="text"
                    name="query"
                    autocomplete="off"
                    autoFocus
                    value={query}
                    onChange={handleChange}
                    placeholder="Search movies"
                />
            </SearchForm>

            {movies?.length !== 0 &&
                <ul>
                    {movies?.map(({ id, title}) => (
                        <li key={id}>
                            <MovieLink state={{from: location}} to={`${id}`}>
                                {title}
                            </MovieLink>
                        </li>
                    ))}
                </ul>
            }
            {isLoading && <Loader />}
            {isError && toast.error("We have error!")}
        </section>
    )
}

export default Movies;