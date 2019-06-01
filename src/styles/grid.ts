import styled, { css } from 'styled-components';

import Media from './media';
import { primaryColor, primaryTextColor } from './colors';

interface Props {
	height?: string;
	center?: boolean;

	padding?: string;
	direction?: string;
}

const Container = styled.section`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;

	color: ${primaryTextColor};

	align-items: center;
`;

const Section = styled.section`
	display: grid;
	box-sizing: border-box;
	height: 100%;

	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;

	${({ height }: Props) =>
		height &&
		css`
			height: ${height};
		`}

	${({ center }: Props) =>
		center &&
		css`
			grid-template-columns: 1fr auto 1fr;
		`}
`;

const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;

	${({ padding }: Props) =>
		padding &&
		css`
			padding: ${padding};
		`}

	${({ direction }: Props) =>
		direction &&
		css`
			flex-direction: ${direction};
		`}
`;

const Background = styled.div`
	display: none;
	visibility: hidden;

	${Media.desktop`
        visibility: visible;
        display: block;
        position: fixed;

        top: 12vh;
		left: 5vw;
        background-image: url(${require('../assets/background2.png')});
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;

        width: 90vw;
        height: 80vh;

        margin: auto;

        z-index: -99;
    `}

	${Media.phone`
        top: 18vh;
        height: 70vh;
	`}
`;

const Building = styled.h1`
	color: ${primaryColor};
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Warning = styled.p`
	display: flex;
	position: fixed;
	justify-content: center;

	max-width: 950px;
	font-size: 2.5em;
	top: 0;

	font-weight: bold;
	color: ${primaryColor};
	text-align: justify;
	z-index: -1;

	border: 3px red solid;
	padding: 20px;
`;

export { Section, Container, Background, Building, Center, Warning };
