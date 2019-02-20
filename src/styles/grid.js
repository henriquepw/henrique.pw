import styled from 'styled-components';
import Media from './media';

const Container = styled.section`
    width: 65em;
    height: 100vh;

    padding-left: 17em;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #3d3d3d;

    ${Media.desktop` 
        padding-left: 0;
        align-items: center;
    `}
`;

export { Container };
