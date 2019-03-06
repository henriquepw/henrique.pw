import styled from 'styled-components';
import Media from '../../styles/media';

const Main = styled.div`
	display: grid;
	grid-template-columns: auto;

	height: 100%;
	padding-left: 4%;

	${Media.desktop`
        padding-left: 0;
    `}
`;

export { Main };
