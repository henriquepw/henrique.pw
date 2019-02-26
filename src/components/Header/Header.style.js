import styled from 'styled-components';
import Colors from '../../styles/colors';
import Media from '../../styles/media';

const Container = styled.header`
	display: flex;
	flex-direction: column;

	h1 {
		font-family: Patua One, cursive;
		color: ${Colors.primaryTextColor};
		font-size: 3em;
		margin: 15px;
		margin-left: 30px;
	}

	${Media.desktop`
        visibility: hidden;

        h1 {
            position: absolute;
            z-index: 99;
            top: 0;
        }
    `}
`;

export { Container };
