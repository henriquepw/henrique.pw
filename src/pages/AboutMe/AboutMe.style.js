import styled from 'styled-components';

import { primaryColor, primaryTextColor } from '../../styles/colors';

const P = styled.p`
	width: 100%;
	font-size: 2em;
	font-family: monospace;
	color: ${primaryTextColor};
	max-width: 920px;

	u,
	strike {
		text-decoration-color: ${primaryColor};
	}
`;

export { P };
