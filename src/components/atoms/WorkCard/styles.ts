import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 9rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;

    width: 100%;
    height: 50%;

    z-index: 5;
    transition: top 0.5s ease-in, bottom 0.5s ease-in;
    background: ${({ theme }) => theme.colors.background};
  }

  &::before {
    top: 0%;
  }

  &::after {
    bottom: 0%;
  }

  &:hover {
    &::before {
      top: -100%;
    }

    &::after {
      bottom: -100%;
    }
  }
`;

export const Title = styled.span`
  z-index: 10;
  pointer-events: none;
  mix-blend-mode: difference;
  font-size: ${({ theme }) => theme.fonts.sizes.h3};
`;

export const Banner = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;

  overflow: hidden;
  user-select: none;
  pointer-events: none;
`;
