import styled from 'styled-components';
import Colors from 'styles/colors';

export const SVG = styled.svg`
    transition: transform 0.3s;

    path, polygon {
        fill: ${Colors.primaryTextColor};
    }

    &:hover {
        transform: scale(1.2);

        path, polygon {
            fill: ${Colors.primaryColor};
        }
    }
`;
