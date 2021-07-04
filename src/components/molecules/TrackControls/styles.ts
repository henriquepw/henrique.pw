import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    background: ${theme.colors.secondaryBackground};
    padding: ${theme.baseSpace * 6}rem ${theme.baseSpace * 10}rem;
    margin: ${theme.baseSpace * 12}rem 0 0 ${theme.baseSpace * 4}rem;

    svg {
      cursor: pointer;
    }

    &::before {
      content: '';
      position: absolute;

      top: ${theme.baseSpace * 4}rem;
      left: -${theme.baseSpace * 4}rem;

      width: 100%;
      height: 100%;

      border: 1px solid ${theme.colors.active};
      z-index: -1;
    }
  `}
`;
