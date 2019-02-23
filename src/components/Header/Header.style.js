import styled from 'styled-components';
import Colors from '../../styles/colors';

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
`;

export { Container };
