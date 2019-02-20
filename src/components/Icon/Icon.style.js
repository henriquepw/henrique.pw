import styled from 'styled-components';

export const SVG = styled.svg`
    transition: transform 0.3s;

    path, polygon {
        fill: #3d3d3d;
    }

    &:hover {
        transform: scale(1.2);

        path, polygon {
            fill: #af4448;
        }
    }
`;
