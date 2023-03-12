import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    &:not(:last-child) {
        padding-bottom: 8px;
        margin-bottom: 16px;
        border-bottom: 1px solid black;
    }
`;

export const Author = styled.h4`
    margin-left: 24px;
    margin-bottom: 8px;
`;

export const Сontent = styled.p`
    margin-bottom: 8px;
`;

export const NotFoundText = styled.p`
    text-align: center;
`;