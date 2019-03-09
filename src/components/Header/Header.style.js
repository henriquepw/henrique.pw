import styled, { css } from 'styled-components';
import { primaryTextColor } from '../../styles/colors';
import Media from '../../styles/media';

const Container = styled.header`
	display: flex;
	flex-direction: column;

	h1 {
		font-family: Patua One, cursive;
		color: ${primaryTextColor};
		font-size: 3em;
		margin: 15px;
		margin-left: 30px;
	}

	${Media.desktop`
        h1 {
			font-size: 2.2em;
            position: fixed;
            z-index: 99;
            top: 0;
			left: 10px;
        }
    `}

	${Media.phone`
        h1 {
			font-size: 1.5em;
        }
    `}

	${({ center }) =>
		center &&
		css`
			grid-column: 1 / span 3;
		`}
`;

export { Container };
