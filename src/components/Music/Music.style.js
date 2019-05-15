import styled, { css } from 'styled-components';
import {
	primaryTextColor,
	primaryColor,
	backgroundDark
} from '../../styles/colors';

const Container = styled.div`
	max-width: 920px;
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		height: 300px;
		width: 300px;

		margin-left: 15%;
		margin-top: auto;
		margin-bottom: auto;
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
	border: 2px solid ${primaryTextColor}
	border-top: none;
	overflow-y: scroll;

	/* width */
	::-webkit-scrollbar {
		width: 5px;
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
	box-shadow: 1px 1px 4px #999;
	padding: 20px;

	svg {
		height: 60px;
		border-radius: 50%;

		margin-left: 8px;
		margin-right: 8px;

		:hover {
			color: ${backgroundDark};
			cursor: pointer;
		}
	}
`;

const Preview = styled.div`
	display: flex;
	border-bottom: 2px solid ${primaryTextColor};
	padding: 15px 10px 15px 10px;
	justify-content: space-between;

	a {
		text-decoration: none;
		color: ${primaryTextColor};

		&:hover {
			color: ${primaryColor};
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

	${({ set }) =>
		set &&
		css`
			color: ${primaryColor};
			font-weight: bold;
		`}
`;

export { Box, Title, Preview, Playlist, Controllers, Container };
