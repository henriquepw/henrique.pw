import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Bars } from 'styled-icons/fa-solid/Bars';

import Media from '../../styles/media';
import Colors from '../../styles/colors';

const Container = styled.nav`
	background-color: ${Colors.primaryColor};
	position: fixed;

	top: 0;
	left: 0;

	width: 17em;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;

	${Media.desktop`
		background: #fff;
		width: 100vw;
		height: 4.5em;
  		transition: .5s;
		z-index: 98;

		${({ press }) =>
			press &&
			css`
				background-color: ${Colors.primaryColor};
				opacity: 0.99;
				width: 100vw;
				height: 100vh;
			`}
    `}
`;

const Img = styled.img`
	display: block;
	margin: 10% auto 10% auto;
	text-align: center;

	width: 10em;

	border-radius: 50%;
	border: 10px solid rgba(255, 255, 255, 0.3);

	${Media.desktop`
        display: none;
        margin: 3.5em;
        border: 0px;
    `}
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin: 0px;
	padding: 0px;
	font-size: 2em;

	${Media.desktop`
		visibility: hidden;
		${({ press }) =>
			press &&
			css`
				visibility: visible;
			`}
	`}
`;

const MenuItem = styled(Link)`
	text-decoration: none;

	font-weight: bold;
	text-align: center;

	padding-top: 8px;
	padding-bottom: 8px;

	color: ${Colors.secondaryTextColor};
	transition: transform 0.3s;
	outline: none;

	&:hover {
		color: rgba(255, 255, 255, 0.8);
		transform: scale(1.08);
	}

	&:focus {
		color: #fff;
	}

	${Media.desktop`
		color: rgba(255, 255, 255, 0.6);
		margin: 10px;
		border: 0px;
    `}
`;

const MenuButton = styled(Bars)`
	display: absolute;
	position: fixed;
	color: ${Colors.primaryColor};

	cursor: pointer;

	top: 10px;
	right: 20px;
	z-index: 99;

	${({ press }) =>
		press &&
		css`
			color: rgba(255, 255, 255, 0.6);
		`}
`;

export { Container, Img, Menu, MenuItem, MenuButton };
