import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background: ${({ theme }) => theme.colors.secondaryBackground};
  padding: 24px 40px;
  margin: 48px 0 0 16px;

  svg {
    cursor: pointer;
    stroke-width: 1px;
  }

  &::before {
    content: '';
    position: absolute;

    top: 16px;
    left: -16px;

    width: 100%;
    height: 100%;

    border: 1px solid ${({ theme }) => theme.colors.active};
    z-index: -1;
  }
`;
