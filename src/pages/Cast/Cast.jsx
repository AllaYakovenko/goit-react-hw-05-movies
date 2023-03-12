import { List, Name, Character} from './Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import ImageNotFound from '../Cast/ImageNotFound.png'


const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMovieCast(movieId).then(setCast).catch(console.error);
    }, [movieId])

    const poster = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            {cast?.length === 0 && <p>We don't have any information about cast.</p>}
            {cast &&
                <List>
                    {cast.map(({ cast_id, character, name, profile_path }) => (
                        <li key={cast_id}>
                            {profile_path ? (<img src={poster + profile_path} alt={name} width={220} />) : (<img src={ImageNotFound} alt='Not found' width={220} height={330}/>)}
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