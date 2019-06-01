import styled from 'styled-components';

import { cardview, primaryTextColor, primaryColor } from 'styles/colors';
import Media from 'styles/media';

const Card = styled.div`
	background: ${cardview};
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 220px;

	margin: 15px;
	box-shadow: 0px 2px 10px rgba(50, 50, 50, 0.2);

	cursor: context-menu;

	p,
	h1 {
		margin: 10px;
		padding-left: 30px;
		color: ${primaryTextColor};
		z-index: 1;
	}

	h1 {
		font-family: Patua One, cursive;
		font-weight: bold;
		font-size: 2.5rem;
		margin-top: 20px;
	}

	p {
		opacity: 0.9;
		font-size: 1.5rem;
	}

	&::before {
		content: '';
		background-color: ${primaryColor};
		opacity: 0.7;
		position: absolute;
		width: 10px;
		height: 220px;
		z-index: 0;
		animation: slide-left 1.3s 1;
	}

	@keyframes slide-left {
		0% {
			width: 10px;
			margin-left: 390px;
		}

		50% {
			width: 400px;
			margin-left: 0px;
		}
	}

	&:hover {
		::before {
			width: 10px;
			margin-left: 390px;
			animation: slide-right 1.3s 1;
		}

		@keyframes slide-right {
			0% {
				width: 10px;
				margin-left: 0;
			}

			50% {
				width: 400px;
				margin-left: 0;
			}
		}
	}

	${Media.small`
		width: 90vw;
		height: 180px;

		p, h1 {
			margin: 5px;
			padding-left: 15px;
		}

		h1 {
			margin-top: 20px;
			font-size: 1.8em;
		}

		p {
			font-size: 1.2em;
			margin-bottom: 20px;
		}

		&::before {
    		height: inherit;
		}

		&:hover {
			::before {
				margin-left: calc(90vw - 10px);
			}

			@keyframes slide-right {
				0% {
					width: 10px;
					margin-left: 0;
				}

				50% {
					width: 90vw;
					margin-left: 0;
				}
			}
		}
	`}
`;

export { Card };
