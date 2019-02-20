import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from 'styles/media';
import Colors from 'styles/colors';

export const Container = styled.nav`
    background-color: ${Colors.primaryColor};
    position: fixed;

    top: 0;
    left: 0;
    
    width: 17em;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Media.desktop` 
        width: 100%;
        height: 64px;
    `}
`;

export const Img = styled.img`
    display: block;
    margin: 10% auto 10% auto;
    text-align: center;

    width: 10em;

    border-radius: 50%;
    border: 10px solid rgba(255, 255, 255, 0.3);

    ${Media.desktop` 
        visibility: hidden;
        margin: 3.5em;
        border: 0px;
    `}
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

    color: ${Colors.secondaryTextColor};

    transition: transform 0.3s;
    &:hover {
        color: rgba(255, 255, 255, 0.8);
        transform: scale(1.08);
    }

    &:focus {
        color: #fff;
    }

    ${Media.desktop` 
        visibility: hidden;
        margin: 3.5em;
        border: 0px;
    `}
`;