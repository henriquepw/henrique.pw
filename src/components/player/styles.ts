import styled, { css } from 'styled-components';
import { primaryTextColor, primaryColor, backgroundDark } from 'styles/colors';

interface props {
	cicle?: boolean;
	set?: boolean;
}

const Container = styled.div`
	max-width: 920px;
	width: 100%;
	display: flex;
	justify-content: center;

	a {
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 15%;
		img {
			height: 300px;
			width: 300px;
		}
	}
`;

const Box = styled.div`
	position: relative;
	width: 350px;
	height: 400px;

	display: flex;
	flex-direction: column;
`;

const Playlist = styled.div`
	position: relative;
	border: 2px solid ${primaryTextColor};
	border-top: none;
	overflow-y: scroll;

	/* width */
	::-webkit-scrollbar {
		width: 4px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 10px;

		:hover {
			background: ${primaryColor};
		}
	}
`;

const Controllers = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	background-color: ${primaryColor};

	padding: 20px;
`;

const Button = styled.svg`
	height: 45px;
	border-radius: 50%;

	:hover {
		color: ${backgroundDark};
		cursor: pointer;
	}

	${({ cicle }: props) =>
		cicle &&
		css`
			margin-left: 15px;
			margin-right: 15px;

			padding-left: 15px;
			padding-right: 15px;

			border: 2px solid black;

			:hover {
				border-color: ${backgroundDark};
			}
		`}
`;

const Preview = styled.div`
	display: flex;
	border-bottom: 2px solid ${primaryTextColor};
	padding: 15px 10px 15px 10px;
	justify-content: space-between;

	a {
		text-decoration: none;
		background-color: ${primaryTextColor};

		&:hover {
			color: ${primaryColor};
		}

		svg {
			height: 30px;
			width: 30px;
		}
	}
`;

const Title = styled.div`
	border: none;
	font-family: VT323;
	font-size: 1.3rem;
	margin-left: 10px;

	:hover {
		cursor: pointer;
	}

	${({ set }: props) =>
		set &&
		css`
			color: ${primaryColor};
			font-weight: bold;
		`}
`;

export { Container, Box, Button, Playlist, Controllers, Preview, Title };
