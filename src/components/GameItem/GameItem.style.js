import styled, { css } from 'styled-components';
import { primaryColor } from '../../styles/colors';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 460px);

	section {
		background-color: ${primaryColor};
		color: #fff;
		padding-left: 40px;
		padding-right: 40px;
		padding-top: 40px;

		h1 {
			margin-top: 0;
		}
	}

	${({ right }) =>
		right &&
		css`
			section {
				grid-columns: 1;
				grid-row: 1;
			}
		`}
`;

export { Container };
