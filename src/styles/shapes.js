import styled, { css } from 'styled-components';
import Colors from './colors';
import Media from './media';

const Divider = styled.div`
    background-color: ${Colors.primaryColor};
    width: 58%;
    height: 5px;

    margin: 30px 0px 25px 0px;

    ${({ margin }) =>
        margin && css`
            margin: ${margin};
        `}

    ${({ size }) =>
        size && css`
            width: ${size};
        `}

    ${Media.desktop`
        ${({ dividerMedia }) =>
            dividerMedia === 'hidden' && css`
                display: none;
        `}
    `}
`;

export { Divider };
