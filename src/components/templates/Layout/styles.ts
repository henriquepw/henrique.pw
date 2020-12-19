import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  position: relative;

  /* border: 1px solid ${({ theme }) => theme.colors.active}; */

  width: 100%;
  height: 100%;
  padding: 32px 64px;

  &::after {
    content: '';
    position: absolute;

    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.active};
    transform: translateX(-100%) translateZ(0);
  }
`;
