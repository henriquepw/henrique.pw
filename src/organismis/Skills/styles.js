import styled from 'styled-components';

import SubT from '~/atoms/SubTitle';

import { primaryColor } from '~/styles/colors';
import Section from '~/styles/section';

export const Container = styled(Section)`
  height: 100%;

  div {
    width: 100%;
    max-width: 760px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ul {
      display: flex;
      justify-content: space-between;

      li {
        height: 72px;
        width: 72px;
        position: relative;

        img {
          filter: grayscale(100%) opacity(80%);
          transition: filter 0.3s ease-out;
          z-index: 1;
        }

        p {
          user-select: none;
          position: absolute;
          text-align: center;
          font-size: 24px;

          left: 50%;
          margin-top: 16px;
          transform: translateX(-50%);
          color: ${primaryColor.active};
        }

        &:hover {
          img {
            filter: none;
          }
        }
      }

      &:last-child {
        margin-bottom: 168px;
      }
    }
  }
`;

export const SubTitle = styled(SubT)`
  &:first-child {
    margin-top: 16px;

    &::before {
      content: none;
    }
  }

  &:nth-child(3) {
    margin-left: auto;

    &::after {
      content: none;
    }
  }
`;
