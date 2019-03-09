import styled, { css } from 'styled-components';
import { primaryColor } from './colors';
import Media from './media';

const Divider = styled.div`
    background-color: ${primaryColor};
    width: 58%;
    height: 5px;

    margin: 25px 0px 25px 0px;

    ${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

    ${({ size }) =>
		size &&
		css`
			width: ${size};
		`}

    ${Media.desktop`
        ${({ dividerMedia }) =>
			dividerMedia === 'hidden' &&
			css`
				display: none;
			`}
    `}

    ${Media.phone`
        height: 3px;
        margin: 15px 0px 15px 0px;
    `}
`;

export { Divider };
