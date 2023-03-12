import {
    Section, Button, Poster, MovieContainer, MovieTitle,
    OverviewTitle, UserScores, OverviewText,
    AdditionalContainer, AdditionalTitle, AdditionalList, AdditionalItem, AdditionalLink
} from './MoviesDetails.styled';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Suspense } from "react";
import { Loader } from "../../components/Loader/Loader";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMovieInfo(movieId).then(setMovie).catch(console.error);
    }, [movieId])

    const posterPathBase = 'https://image.tmdb.org/t/p/w500';

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <>
            {movie &&
                <Section>
                    <Button type='button' onClick={()=>navigate(location?.state?.from ?? '/')}> Go back </Button>
                    <MovieContainer>
                        <Poster>
                            <img src={posterPathBase + movie.poster_path} alt={movie.title} width={280}/>
                        </Poster>
                        <div>
                            <MovieTitle>{movie.title} ({movie.release_date.slice(0, 4)})</MovieTitle>
                            <UserScores>User scores: {Math.ceil(movie.vote_average*10)}%</UserScores>
                            <OverviewTitle>Overview</OverviewTitle>
                            <OverviewText>{movie.overview}</OverviewText>
                            <OverviewTitle>Genres</OverviewTitle>
                            <OverviewText>{movie.genres.map(genre => genre.name).join(', ')}</OverviewText>
                        </div>
                    </MovieContainer>
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
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Section>
            }
        </>
    )
}

export default MovieDetails;