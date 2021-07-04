import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: content-box;

    label {
      position: absolute;
      font-size: 1.125rem;
      letter-spacing: 0.1em;
      cursor: pointer;
    }

    input,
    textarea {
      border: none;
      border-bottom: ${theme.baseSpace}rem solid transparent;
      background: transparent;

      color: ${theme.colors.text};
      font-size: 1.125rem;
      min-height: ${theme.baseSpace * 12}rem;

      &:focus {
        border-bottom-color: ${theme.colors.active};
      }
    }
  `}
`;
