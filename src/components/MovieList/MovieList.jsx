import { TrendMovieLink } from "./MovieList.styled";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <div>
            <ul>
                {movies.map(({ id, title, name }) => {
                    return (
                        <li key={id}>
                            <TrendMovieLink to={`/movies/${id}`} state={{ from: location }}>
                                {title || name}
                            </TrendMovieLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name:PropTypes.string
        })
    ),
};