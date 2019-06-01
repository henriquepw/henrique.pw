import styled from 'styled-components';
import { primaryColor } from 'styles/colors';
import Media from 'styles/media';

const Container = styled.div`
	display: grid;
	grid-template-columns: auto;
	overflow: hidden;
	position: relative;
	padding-left: 40px;
	padding-right: 40px;

	&::after {
		content: ' ';
		position: absolute;
		background-color: ${primaryColor};
		width: 3px;
		height: 100%;
		top: 0;
		left: 50%;

		${Media.maxTimeline`
			left: 32%;
		`}
	}

	${Media.maxTimeline`
		min-width: auto;
	`}
`;

export { Container };
