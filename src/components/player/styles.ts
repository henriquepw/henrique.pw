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

	span {
		display: flex;
		justify-content: center;

		height: 45px;
		width: 45px;
		border-radius: 50%;

		:hover {
			cursor: pointer;
			animation: expand 0.5s 1;

			color: ${backgroundDark};
			transform: scale(1.15);

			@keyframes expand {
				0% {
					color: ${backgroundDark};
					transform: scale(1);
				}
				20%{
					transform: scale(1);
				}
			}
		}

		svg {
			height: 100%;
			width: 100%;
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

		svg {
			height: 30px;
			width: 30px;
		}

		&:hover {
			color: ${primaryColor};

			svg {
				transition: 0.2s;
				transform: scale(1.05);
			}
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

		transition: 0.2s;
		transform: scale(1.05);
		color: ${primaryColor};
	}

	${({ set }: props) =>
		set &&
		css`
			color: ${primaryColor};
			font-weight: bold;
		`}
`;

export { Container, Box, Playlist, Controllers, Preview, Title };
