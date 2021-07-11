import styled, { css } from 'styled-components';

import Layout from '@/components/templates/Layout';

export const Container = styled(Layout)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h1 {
      margin-left: ${theme.baseSpace * 6}rem;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      &:before {
        content: '';
        position: absolute;

        top: -${theme.baseSpace * 22}rem;
        left: 0;

        height: calc(100% + ${theme.baseSpace * 22}rem);
        width: ${theme.baseSpace * 9}rem;

        background: ${theme.colors.secondaryBackground};
        z-index: -1;
      }
    }

    aside {
      h3,
      li {
        font-size: ${theme.fonts.sizes.h5};
      }

      li {
        margin-bottom: ${theme.baseSpace * 14}rem;
      }

      h3 {
        margin-bottom: ${theme.baseSpace * 6}rem;
      }
    }
  `}
`;
