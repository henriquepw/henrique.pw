import styled from 'styled-components';
import { primaryColor } from '../../styles/colors';

const Container = styled.div`
	display: grid;
	grid-template-columns: auto;
	min-width: 1008.89px;
	overflow: hidden;
	position: relative;

	&::after {
		content: ' ';
		position: absolute;
		background-color: ${primaryColor};
		width: 3px;
		height: 100%;
		top: 0;
		left: 50%;
	}
`;

export { Container };
