import { List, Name, Character, NotFoundCast} from './Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from "../../components/Loader/Loader";
import api from 'services/api';
import ImageNotFound from '../Cast/ImageNotFound.png'


const Cast = () => {
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { movieId } = useParams();

     useEffect(() => {
        setIsLoading(true);
        const movieCast = async () => {
            try {
                const data = await api.fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        movieCast();
    }, [movieId]);

    const ImgUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>ERROR!!!</p>}
            {cast?.length === 0 && <NotFoundCast>We don't have any information about cast.</NotFoundCast>}
            {cast &&
                <List>
                    {cast.map(({ cast_id, character, name, profile_path }) => (
                        <li key={cast_id}>
                            {profile_path ? (<img src={ImgUrl + profile_path} alt={name} width={220} />) : (<img src={ImageNotFound} alt='Not found' width={220} height={330}/>)}
                            <Name>{name}</Name>
                            <Character>Character: {character}</Character>
                        </li>
                    ))}
                </List>
            }
        </>
    )
}

export default Cast;