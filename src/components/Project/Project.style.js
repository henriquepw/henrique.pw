import styled from 'styled-components';
import { cardview, primaryTextColor, primaryColor } from '../../styles/colors';

const Card = styled.div`
	background: ${cardview};
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 200px;

	margin: 15px;
	box-shadow: 0px 2px 10px rgba(50, 50, 50, 0.2);

	p,
	h1 {
		margin: 10px;
		padding-left: 30px;
		color: ${primaryTextColor};
	}

	h1 {
		font-family: Patua One, cursive;
		font-weight: bold;
		font-size: 2.5rem;
		margin-top: 20px;
		z-index: 1;
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
		height: 200px;
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
`;

export { Card };
