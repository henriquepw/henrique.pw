import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';
import Media from '../../styles/media';

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
    
    ${Media.tablet`
        transform: scale(.6);
    `}

    ${({ noHover }) =>
        !noHover && css`
            &:hover {
                transform: scale(1.2);
            }

            ${Media.tablet`
                margin-left: -15px;
                margin-right: -15px;
                margin-top: -15px;
                    
                &:hover {
                    transform: scale(.9);
                }
            `}
        `}
`;
