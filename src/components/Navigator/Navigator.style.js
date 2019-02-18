import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
    background-color: #af4448;
    position: fixed;

    width: 17em;
    height: 100vh;

    display: flex;
    flex-direction: column;
`;

export const Img = styled.img`
    display: block;
    margin: 120px auto 120px auto;
    text-align: center;

    width: 10em;

    border-radius: 50%;
    border: 10px solid rgba(255, 255, 255, 0.3);
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin: 0px;
    padding: 0px;

    font-size: 2em;
`;

export const MenuItem = styled(Link)`
    text-decoration: none;

    font-weight: bold;
    text-align: center;

    padding-bottom: 15px;

    color: #d4a5a6;

    transition: transform 0.3s;

    &:hover {
        color: rgba(255, 255, 255, 0.8);
        transform: scale(1.08);
    }

    &:focus {
        color: #fff;
    }
`;
