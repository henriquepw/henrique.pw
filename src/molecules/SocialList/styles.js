import styled, { css, keyframes } from 'styled-components';

const icon = keyframes`
  0%,
  80% {
    opacity: 0;
    z-index: -1;
    transform: translateY(-60px);
  }
`;

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isAnimated &&
    css`
      animation: ${icon} 2.5s 1 ease-out;
    `}
`;
