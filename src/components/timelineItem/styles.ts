import styled, { css } from 'styled-components';

import {
	primaryColor,
	primaryTextColor,
	cardview,
	background
} from '../../styles/colors';

import Media, { windows } from '../../styles/media';

const { maxTimeline, phoneTimeline } = windows;

interface Props {
	left?: boolean;
	scale?: number;
}

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	box-sizing: content-box;

	@media (min-width: ${phoneTimeline}px) {
		&:hover {
			cursor: context-menu;

			div h3 {
				font-size: 4em;

				&::after {
					background-color: ${background};
					border-color: ${primaryColor};
					margin-left: -210px;

					@media (min-width: ${maxTimeline}px) {
						${({ left }: Props) =>
							left &&
							css`
								margin-left: 40px;
							`}
					}
				}
			}
		}
	}

	margin-bottom: 50px;

	${Media.maxTimeline`
		grid-template-columns: 30% auto;
	`}
`;

const Date = styled.div`
	text-align: right;
	margin-top: -50px;

	h3 {
		color: ${primaryColor};
		font-size: 3.5em;
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

	@media (min-width: ${maxTimeline}px) {
		${({ left }: Props) =>
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
	}

	${Media.phoneTimeline`
		h3 {
			font-size: 2.5em;
		}
	`}
`;

const Card = styled.div`
	background-color: ${cardview};
	border-right: 4px solid ${primaryColor};
	position: relative;
	max-width: 450px;
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
		font-size: 2em;
	}

	h2 {
		font-size: 1.2em;
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

		border: 0.6em solid black;
		border-color: transparent transparent ${cardview} ${cardview};
	}

	@media (min-width: ${maxTimeline}px) {
		${({ left }: Props) =>
			left &&
			css`
				grid-column-start: 1;
				grid-row-start: 1;
				border-left: 4px solid ${primaryColor};
				border-right: none;

				&::before {
					transform: rotate(225deg);

					right: 0;
					margin-top: 60px;
					margin-right: -20px;
				}
			`}
	}

	${Media.phoneTimeline`
		${({ scale }: Props) =>
			scale &&
			css`
				transform: scale(scale);
			`}
	`}
`;

const Border = styled.div`
	display: none;

	${Media.maxTimeline`
		display: block;
	`}
`;

export { Content, Card, Date, Border };
