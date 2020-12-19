import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-left: auto;
  }

  ul {
    li + li {
      margin-top: 72px;
    }
  }
`;
