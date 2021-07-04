import styled, { css } from 'styled-components';

import Layout from '@/components/templates/Layout';

export const Container = styled(Layout)`
  flex-direction: column;
`;

export const MainSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    min-height: 100vh;

    > div:first-of-type {
      max-width: 575px;
      position: relative;

      padding: ${theme.baseSpace * 8}rem;
      margin: ${theme.baseSpace * 20}rem;
      margin-left: 0;

      &::before {
        content: '';
        position: absolute;

        top: 0;
        left: 0;

        height: 100%;
        width: 100%;

        border: 1px solid ${theme.colors.active};
        z-index: -1;
      }

      svg {
        display: block;
        position: absolute;
        cursor: pointer;

        bottom: -${theme.baseSpace * 2}rem;
        left: -${theme.baseSpace * 2}rem;
        transform: translateX(-100%);
        color: ${theme.colors.active};
      }

      p {
        margin: 0 ${theme.baseSpace * 16}rem ${theme.baseSpace * 10}rem;

        font-size: 1.125rem;
        line-height: 1.5em;
        letter-spacing: 0.03em;
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    display: inline-block;
    position: absolute;

    height: 100%;
    margin: calc(-${theme.fonts.sizes.h1} - ${theme.baseSpace * 8}rem) 0
      ${theme.baseSpace * 22}rem ${theme.baseSpace * 4}rem;

    font-weight: 400;
    font-size: ${theme.fonts.sizes.h1};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;

      top: 1.8rem;
      left: 50%;
      transform: translateX(-50%);

      height: 100%;
      width: calc(100% + ${theme.baseSpace * 8}rem);

      background: ${theme.colors.secondaryBackground};
      z-index: -1;
    }
  `}
`;
