import { Section, Button, AdditionalContainer, AdditionalTitle, AdditionalList, AdditionalItem, AdditionalLink } from './MoviesDetails.styled';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import { Loader } from "../../components/Loader/Loader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieCard from 'components/MovieCard/MovieCard';


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { movieId } = useParams();

     useEffect(() => {
        setIsLoading(true);

        const movieInfo = async () => {
            try {
                const data = await api.fetchMovieInfo(movieId);
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        movieInfo();
    }, [movieId]);

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <>
            {movie &&
                <Section>
                    <Button type='button' onClick={()=>navigate(location?.state?.from ?? '/')}> Go back </Button>
                    <MovieCard movie={movie}/>
                    <AdditionalContainer>
                        <AdditionalTitle>Additional information</AdditionalTitle>
                        <AdditionalList>
                            <AdditionalItem>
                                <AdditionalLink state={{ from: location.state?.from }} to='cast'>Cast</AdditionalLink>
                            </AdditionalItem>
                            <AdditionalItem>
                                <AdditionalLink state={{ from: location.state?.from }} to='reviews'>Reviews</AdditionalLink>
                            </AdditionalItem>
                        </AdditionalList>
                    </AdditionalContainer>
                        {isLoading && <Loader />}
                        {error && toast.error('Please wait..')}
                        <Outlet />
                </Section>
            }
        </>
    )
}

export default MovieDetails;