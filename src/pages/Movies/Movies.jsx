import { SearchForm, SearchButton, SearchInput, MovieLink} from "./Movies.styled";
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from 'services/api';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isError, setIsError] = useState(false);

    const query = searchParams.get("query") ?? "";
    const location = useLocation();

    useEffect(() => {
        if (query === '') {
            return;
        };

        const getMovies = async () => {
            try {
                let movies = await api.fetchMovieSearch(query);
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
            }
        }

        getMovies();
    }, [query])

    const handleSubmit = event => {
        event.preventDefault();
        
        const form = event.currentTarget;
        setSearchParams({ query: form.elements.query.value.toLowerCase() });

        if (query.trim() === '') {
            return toast.info("Enter a keyword to search for a movie");
        }

        form.reset();
    }

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
            
            {isError && toast.error("We have error.")}
        </section>
    )
}

export default Movies;