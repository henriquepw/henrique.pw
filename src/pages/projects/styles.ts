import styled from 'styled-components';

import Media from 'styles/media';

const Grid = styled.div`
	display: grid;
	grid-column-start: 2;
	grid-template-columns: repeat(3, 430px);

	${Media.gient`
		grid-template-columns: repeat(2, 430px);
	`}

	@media (max-width: 926px) {
		grid-template-columns: 420px;
	}

	${Media.small`
		grid-template-columns: auto;
	`}
`;

export { Grid };
