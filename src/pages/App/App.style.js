import styled from 'styled-components';
import Media from '../../styles/media';

export const Container = styled.div`
	padding-left: 17em;

	width: auto;
	height: 100vh;

	${Media.desktop`
        padding-top: 64px;
        padding-left: 0;
    `}
`;
