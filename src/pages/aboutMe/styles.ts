import styled from 'styled-components';

import { primaryColor, primaryTextColor } from 'styles/colors';

const P = styled.p`
	width: 100%;
	font-size: 2em;
	font-family: monospace;
	color: ${primaryTextColor};
	max-width: 920px;

	u, span {
		text-decoration-color: ${primaryColor};
	}
`;

const Strike = styled.span`
	text-decoration: line-through;
`;

export { P, Strike };
