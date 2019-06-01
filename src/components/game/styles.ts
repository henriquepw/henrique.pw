import styled, { css } from 'styled-components';

import { primaryColor } from 'styles/colors';

interface Props {
	right?: boolean;
}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 460px);

	section {
		background-color: ${primaryColor};
		color: #fff;
		padding: 35px 40px 0 40px;
		position: relative;

		h1 {
			margin: 0;
			font-weight: bold;
			font-size: 1.5rem;
		}

		p {
			text-align: justify;
			font-size: 1.05rem;
			margin-top: 15px;
		}

		img {
			height: 100%;
		}
	}

	${({ right }: Props) =>
		right &&
		css`
			section {
				grid-columns: 1;
				grid-row: 1;
			}
		`}
`;

export { Container };
