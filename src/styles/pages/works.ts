import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: calc(100vh - ${theme.baseSpace * 32}rem);
  `}
`;
