import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryTextColor, primaryColor } from '../../styles/colors';
import Media from '../../styles/media';

const Button = styled(Link)`
	display: flex;
	position: fixed;
	align-items: center;

	bottom: 0;
	right: 0;
	padding: 20px;
	outline: none;

	text-decoration: none;

	transition: 0.5s all ease;

	label {
		white-space: nowrap;
		outline: none;
		margin: 0;
		margin-right: -20px;

		transition: 0.5s all ease;

		font-weight: bold;
		color: ${primaryTextColor};
	}

	&:hover {
		cursor: pointer;
		label {
			cursor: pointer;
			margin-right: 0;
			color: ${primaryColor};
		}

		padding-right: 10px;

		svg {
			path,
			polygon {
				fill: ${primaryColor};
			}
		}
	}

	${Media.tablet`
		padding: 5px;

        label {
            transform: scale(0.8);
            margin-right: -30px;
        }

        &:hover {
            label {
                margin-right: -10px;
            }
            padding-right: 5px;
        }
    `}
`;

export { Button };
