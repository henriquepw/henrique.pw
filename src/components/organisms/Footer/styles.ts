import styled from 'styled-components';

import Media from '~/styles/media';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.primary.active};
  padding: 40px 80px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    letter-spacing: 8px;
    padding-right: 20px;

    a {
      position: relative;
      transition: 0.2s;

      &::after {
        content: '';
        position: absolute;

        left: 0;
        bottom: -2px;

        height: 1px;
        width: 0%;
        background-color: ${({ theme }) => theme.primary.active};
        transition: width 0.3s ease-out;
      }

      &:focus {
        outline: 3px solid ${({ theme }) => theme.primary.active};
        outline-offset: 4px;
      }

      &:hover {
        color: ${({ theme }) => theme.primary.active};

        &::after {
          width: calc(100% - 8px);
        }
      }
    }
  }

  ${Media.smallDesktop`
    padding: 40px 0px;

    p {
      padding-right: 20px;
    }
  `}

  ${Media.tablet`
    flex-direction: column;

    p {
      padding: 24px 0 0 8px;
    }
  `}

  ${Media.phone`
    p {
      letter-spacing: 6px;
    }
  `}
`;
