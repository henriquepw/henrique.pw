import styled, { css } from 'styled-components';
import { primaryColor } from './colors';
import Media from './media';

interface props {
	margin?: string;
	size?: string;

	dividerMedia?: string;
	direction?: string;

	radius?: boolean;
	radiusRight?: boolean;
}

const Divider = styled.div`
		background-color: ${primaryColor};
    width: 58%;
    height: 5px;

    margin: 25px 0px 25px 0px;

    ${({ margin }: props) =>
		margin &&
		css`
			margin: ${margin};
		`}

    ${({ size }: props) =>
		size &&
		css`
			width: ${size};
		`}

		${({ radius }: props) =>
			radius &&
			css`
				border-radius: 20px;
			`}

		${({ radiusRight }: props) =>
			radiusRight &&
			css`
				border-bottom-right-radius: 20px;
				border-top-right-radius: 20px;
			`}

		${Media.desktop`
        ${({ dividerMedia }: props) =>
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
