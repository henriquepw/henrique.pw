import styled, { css, keyframes } from 'styled-components';

const icon = keyframes`
  0%,
  80% {
    opacity: 0;
    z-index: -1;
    transform: translateY(-60px);
  }
`;

interface ContainerProps {
  isAnimated?: boolean;
}

export const Container = styled.ul<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isAnimated }) =>
    isAnimated &&
    css`
      animation: ${icon} 2.5s 1 ease-out;
    `}
`;
