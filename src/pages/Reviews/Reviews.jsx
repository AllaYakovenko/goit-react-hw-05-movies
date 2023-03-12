import { NotFoundText, List, Item, Author, Сontent} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMovieReviews(movieId).then(setReviews).catch(console.error);
    }, [movieId])
    
    return (
        <>
            {reviews?.length === 0 && <NotFoundText>We don't have any reviews for this movie.</NotFoundText>}
            {reviews &&
                <List>
                    {reviews.map(({ id, author, content }) => (
                        <Item key={id}>
                            <Author>Author: {author}</Author>
                            <Сontent>{content}</Сontent>
                        </Item>
                    ))}
                </List>
            }
        </>
    )
}

export default Reviews;