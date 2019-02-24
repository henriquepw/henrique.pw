import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

export const SVG = styled.svg`
    transition: transform 0.3s;

    path, polygon {
        fill: ${Colors.primaryTextColor};
    }


    
    &:hover {
        path, polygon {
            fill: ${Colors.primaryColor};
        }
    }

    ${({ noHover }) =>
        !noHover && css`
            &:hover {
                transform: scale(1.2);
            }
        `}
`;
