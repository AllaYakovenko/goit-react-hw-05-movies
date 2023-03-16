import { NotFoundText, List, Item, Author, Сontent} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from "../../components/Loader/Loader";
import api from '../../services/api';


const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { movieId } = useParams();

     useEffect(() => {
        setIsLoading(true);

        const movieReviews = async () => {
            try {
                const data = await api.fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                setError(error.message);
            }
            finally{
                setIsLoading(false)
            }
        };
        movieReviews();
    }, [movieId]);
    
    return (
        <>
            {isLoading && <Loader />}
            {error && <p>We have error!</p>}
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