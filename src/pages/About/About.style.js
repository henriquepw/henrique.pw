import styled from 'styled-components';
import { Container } from 'styles/grid.js';
import Media from 'styles/media';
import Colors from 'styles/colors';

const Section = styled(Container)`
    span {
        color: ${Colors.primaryColor};
    }

    h1, h2 {
        font-family: Patua One, cursive;
        margin: 0px;
    }

    h1 {
        font-size: 4em;
        margin-top: 30px;
    }

    h2 {
        font-size: 1.9em;
    }

    p {
        margin: 0px;
        padding: 0px;
    }

    h1, h2, p, ul {
        margin-left: 40px;
        margin-right: 40px;
    }

    ul {
        padding: 0px 0px;
        display: flex;
    }

    li {
        list-style-type: none;
        padding-right: 20px;
    }

    a img {
        transition: transform 0.3s;
        border-radius: 50%;
        width: 3.5em;
    }

    a:hover img {
        transform: scale(1.2);
    }

    ${Media.tablet` 
        h1 { 
            font-size: 3em;
        }

        h2 { 
            font-size: 1.5em;
            text-align: center;
        }
    `}
    
    ${Media.phone` 
        h1 { 
            font-size: 2.5em;
        }

        h2 { 
            font-size: 1.2em;
            text-align: center;
        }
    `}
`;

const Divider = styled.div`
    background-color: ${Colors.primaryColor};
    width: 58%;
    height: 5px;

    margin: 30px 0px 25px 0px;
`;

export { Section, Divider };
