import styled, { css } from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;

  margin: ${({ theme }) => theme.baseSpace * 6}rem;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.secondaryBackground};

    padding: ${theme.baseSpace * 8}rem;
    max-width: ${theme.baseSpace * 116}rem;
    min-height: ${theme.baseSpace * 70}rem;
    padding-right: ${theme.baseSpace * 28}rem;

    h4 {
      letter-spacing: 0.03em;
      margin-bottom: ${theme.baseSpace * 4}rem;
    }

    p {
      letter-spacing: 0.03em;
      margin-right: ${theme.baseSpace * 10}rem;
    }

    &::before {
      content: '';
      position: absolute;

      top: -${theme.baseSpace * 6}rem;
      left: -${theme.baseSpace * 6}rem;

      height: 100%;
      width: calc(100% + ${theme.baseSpace * 12}rem);

      border: 1px solid ${theme.colors.active};
      z-index: -1;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

    margin-left: -${theme.baseSpace * 28}rem;
    /* height: ${theme.baseSpace * 50}rem; */
    width: ${theme.baseSpace * 102}rem;

    div {
      flex: 1;
    }
  `}
`;
