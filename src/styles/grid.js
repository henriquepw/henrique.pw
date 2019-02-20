import styled from 'styled-components';
import Media from './media';

const Container = styled.section`
    width: 65em;
    height: 100vh;

    padding-left: 17em;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #3d3d3d;

    ${Media.desktop` 
        padding-left: 0;
        align-items: center;
    `}
`;

const Background = styled.div`
    display: none;
    visibility: hidden;

    ${Media.desktop`
        visibility: visible;
        display: block;
        position: fixed;
        
        background-image: url(${require('assets/background.png')});
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;

        width: 90vw;
        height: 90vh;

        z-index: -99;
    `}
`;

export { Container, Background };
