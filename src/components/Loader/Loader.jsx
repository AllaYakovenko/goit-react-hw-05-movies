import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export function Loader() {
    return (
        <LoaderContainer>
            <ThreeDots 
                height="100" 
                width="100" 
                radius="12"
                color="#ff4500" 
                ariaLabel="three-dots-loading"
            />
        </LoaderContainer>
    )
}