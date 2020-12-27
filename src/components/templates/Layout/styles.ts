import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;
  padding: 56px 88px;
  margin: auto 0;

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
