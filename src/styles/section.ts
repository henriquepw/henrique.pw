import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;

  padding-left: 20px;
  padding-right: 20px;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.secondary.background};
  }
`;
