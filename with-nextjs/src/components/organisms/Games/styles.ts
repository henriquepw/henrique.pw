import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.baseSpace * 20}rem 0 ${theme.baseSpace * 24}rem;

    h2 {
      display: inline-block;
      width: 100%;
      max-width: 1176px;
      text-align: right;
    }

    ul {
      li + li {
        margin-top: ${theme.baseSpace * 26}rem;
      }

      li:nth-of-type(odd) {
        padding-right: ${theme.baseSpace * 56}rem;
      }

      li:nth-of-type(even) {
        flex-direction: row-reverse;
        text-align: right;
        padding-left: ${theme.baseSpace * 56}rem;

        > div:first-of-type {
          padding-right: ${theme.baseSpace * 8}rem;
          padding-left: ${theme.baseSpace * 28}rem;

          p {
            margin-right: 0;
            margin-left: ${theme.baseSpace * 10}rem;
          }
        }

        > div:last-of-type {
          margin-left: 0;
          margin-right: -${theme.baseSpace * 28}rem;
        }
      }
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1176px;
    margin-bottom: ${theme.baseSpace * 14}rem;

    p {
      width: 100%;
      max-width: 560px;

      font-size: ${theme.fonts.sizes.h5};
      line-height: 1.5em;
      letter-spacing: 0.03em;

      text-align: right;
      margin-left: auto;
    }
  `}
`;
