import styled, { css } from 'styled-components';
import {
	primaryColor,
	primaryTextColor,
	cardview,
	background
} from '../../styles/colors';
import Media from '../../styles/media';

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	box-sizing: content-box;

	&:hover {
		cursor: context-menu;

		div h3 {
			font-size: 4rem;

			&::after {
				background-color: ${background};
				border-color: ${primaryColor};
				margin-left: -210px;

				${({ left }) =>
					left &&
					css`
						margin-left: 40px;
					`}
			}
		}
	}

	margin-bottom: 50px;
`;

const Date = styled.div`
	text-align: right;
	margin-top: -50px;

	h3 {
		color: ${primaryColor};
		font-size: 3.5rem;
		margin: 0;
		margin-right: 50px;
		transition: 1s;

		&::after {
			content: '';
			position: absolute;
			background-color: ${primaryColor};
			width: 23px;
			height: 23px;

			margin-top: -10px;
			margin-left: 40px;
			box-sizing: border-box;
			transition: 0.5s;

			border: 3px solid ${background};
			border-radius: 50%;
			z-index: 1;
		}
	}

	${({ left }) =>
		left &&
		css`
			text-align: left;

			h3 {
				margin: 0;
				margin-left: 50px;

				&::after {
					margin-left: -190px;
				}
			}
		`}
`;

const Card = styled.div`
	background-color: ${cardview};
	position: relative;
	max-width: 450px;
	min-width: 386.667px;
	margin-left: 50px;
	margin-right: 50px;
	margin-top: 40px;

	h1,
	h2 {
		color: ${primaryTextColor};
		padding-left: 30px;
		padding-right: 30px;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.2rem;
		padding-bottom: 20px;
	}

	&::before {
		content: '';
		position: absolute;
		background-color: ${cardview};
		width: 0;
		height: 0;

		margin-top: 30px;

		transform: rotate(45deg);

		box-sizing: border-box;
		transform-origin: 0 0;

		border: 0.6rem solid black;
		border-color: transparent transparent ${cardview} ${cardview};
	}

	${({ left }) =>
		left &&
		css`
			grid-column-start: 1;
			grid-row-start: 1;

			&::before {
				transform: rotate(225deg);

				right: 0;
				margin-top: 60px;
				margin-right: -20px;
			}
		`}
`;

export { Content, Card, Date };
