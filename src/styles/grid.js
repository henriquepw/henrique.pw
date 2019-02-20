import styled from 'styled-components';

import Media from './media';
import Colors from './colors';

const Container = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: ${Colors.primaryTextColor};

    align-items: center;
`;

const Background = styled.div`
    display: none;
    visibility: hidden;

    ${Media.desktop`
        visibility: visible;
        display: block;
        position: fixed;
        
        background-image: url(${require('../assets/background2.png')});
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;

        width: 90vw;
        height: 90vh;

        margin: auto;

        z-index: -99;
    `}
`;

export { Container, Background };
