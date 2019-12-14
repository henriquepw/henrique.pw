import styled, { keyframes } from 'styled-components';

const icon = keyframes`
  0% {
    opacity: 0;
    margin-top: -60px;
    z-index: -1;
  }
  80% {
    opacity: 0;
    margin-top: -60px;
    z-index: -1;
  }
`;

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${icon} 2.5s 1;
`;
