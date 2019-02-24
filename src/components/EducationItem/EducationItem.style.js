import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

const Box = styled.div`
    display: grid;

    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;

    max-width: 750px;

    h1, h2, h3 {
        display: flex;
        align-items: center;
        margin: 0 30px 20px 30px;
    }

    h1 {
        font-weight: bold;
        font-size: 1.8em;
    }

    h2 {
        grid-column: 2;
        color: ${Colors.primaryTextColor};
        font-weight: normal;
    }

    h3 {
        color: ${Colors.primaryColor};
        font-size: 1.4em;
        padding: 5px 15px 5px 15px;
        margin-bottom: 0px;
        border: 3px solid ${Colors.primaruColor};
        border-radius: 15px;
    }


`;

const Div = styled.div`
    grid-row: 2;
    grid-column: 1;

    display: flex;
    flex-direction: column;
`;

const Card = styled.span`
    grid-column: 2;
    grid-row: 1 / span 2;

    padding-top: 20px;
    margin-bottom: 70px;
    margin-top: -18px;

    border-radius: 15px;
    box-shadow: 0px 2px 10px rgba(50, 50, 50, 0.2);

    ${({ init }) => init && css`
        margin-bottom: 0;
    `}

    &::before {
        content: '';
        position: absolute;
        background-color: #fff;
        width: 0;
        height: 0;

        margin-top: 8px;

        transform: rotate(45deg);
        
        box-sizing: border-box;
        transform-origin: 0 0;

        border: .5em solid black;
        border-color: transparent transparent #fff #fff;

        box-shadow: -3px 3px 3px 0 rgba(50, 50, 50, 0.05);
    }
`;

const Timeline = styled.div`
    ${({ init }) =>
        !init && css`
            background-color: ${Colors.primaryColor};
            height: calc(50% - 36px);
            width: 5px;
            margin: auto;
            z-index: -1;
        `}
`;

const HalfMoon = styled.div`
    ${({ init }) =>
        !init && css`
            background: ${Colors.primaryColor};
            margin: auto;
            height: 15px;
            width: 30px;

            ${({ end }) =>
                !end && css`
                    border-bottom-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                `}

            ${({ end }) =>
                end && css`
                    border-top-right-radius: 30px;
                    border-top-left-radius: 30px;
                `}
        `}
`;

const Circle = styled.div`
    ${({ init }) =>
        !init && css`
            background: #fff;
            margin: auto;

            height: 18px;
            width: 18px;

            border: 5px solid ${Colors.primaryColor};
            border-radius: 100%;
        `}
`;

export { Box, Card, Div, Timeline, HalfMoon, Circle };
