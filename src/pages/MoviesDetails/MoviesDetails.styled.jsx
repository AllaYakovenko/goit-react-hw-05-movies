import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
    padding-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 16px;
    color: #411100;
    background-color: white; 
`;

export const Button = styled.button`
    font-size: 16px;
    font-weight: 700;
    font-family: Segoe UI;
    padding: 8px;
    margin-bottom: 16px;
    color: orangered;
    background-color: white; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: white;
        background-color: orangered;
        border-color: none;
    }
`;

export const MovieContainer = styled.div`
    display: flex;
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 3px double;
    border-color: orangered;
`;

export const Poster = styled.div`
    margin-right: 24px;
`;

export const MovieTitle = styled.h3`
    font-size: 32px;
    font-family: Segoe UI;
    margin-bottom: 24px;
`;

export const UserScores = styled.p`
    margin-bottom: 48px;
    font-family: Segoe UI;

`;

export const OverviewTitle = styled.h4`
    font-size: 20px;
    font-family: Segoe UI;
    margin-bottom: 8px;
`;

export const OverviewText = styled.p`
    margin-bottom: 48px;
    font-family: Segoe UI;

`;

export const AdditionalContainer = styled.div`
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 3px double;
    border-color: orangered;
`;

export const AdditionalTitle = styled.h4`
    font-size: 20px;
    font-family: Segoe UI;
    margin-bottom: 8px;
    text-transform: uppercase;
    text-align: center;
`;

export const AdditionalList = styled.ul`
    list-style: none;
    margin: 0;
    text-align: center;

`;

export const AdditionalItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const AdditionalLink = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    font-family: Segoe UI;
    color: #491300;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover:not(.active),
    &:focus:not(.active) {
        color: #ff4f0e;
    }
    &.active {
        text-decoration: underline #ff4f0e;
        color: #ff4f0e;
    }
`;