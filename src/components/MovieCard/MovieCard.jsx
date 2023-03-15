import {
    Poster, MovieContainer, MovieTitle,
    OverviewTitle, UserScores, OverviewText
} from '../../pages/MoviesDetails/MoviesDetails.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  
    const BaseImg = 'https://image.tmdb.org/t/p/w500';


    const { poster_path, title, release_date, overview, vote_average, genres } = movie;
    return (
        <MovieContainer>
            <Poster>
                <img src={BaseImg + poster_path} alt={title} width={280}/>
            </Poster>
            <div>
                <MovieTitle>{title} ({release_date.slice(0, 4)})</MovieTitle>
                <UserScores>User scores: {Math.ceil(vote_average*10)}%</UserScores>
                <OverviewTitle>Overview</OverviewTitle>
                <OverviewText>{overview}</OverviewText>
                <OverviewTitle>Genres</OverviewTitle>
                <OverviewText>{genres.map(genre => genre.name).join(', ')}</OverviewText>
            </div>
        </MovieContainer>
    );
};
export default MovieCard;

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.string.isRequired,
        genres: PropTypes.string.isRequired,
    }),
};