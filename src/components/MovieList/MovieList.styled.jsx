import styled from 'styled-components';
import { Link } from "react-router-dom";

export const TrendMovieLink = styled(Link)`
    text-decoration: none;
    font-family: Segoe UI;
    margin-left: 15;
    color: black;
    &:hover,
    &:focus {
        color: orangered;
        text-decoration: underline;
    }
`;