import styled from 'styled-components';

import SubT from '~/atoms/SubTitle';

import { primaryColor } from '~/styles/colors';
import Media, { width } from '~/styles/media';
import Section from '~/styles/section';

export const Container = styled(Section)`
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 760px;
    padding: 0px 24px;
    margin-bottom: 168px;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        height: 72px;
        width: 72px;
        position: relative;
        margin: 16px 0;
        backface-visibility: hidden;

        img {
          width: 100%;
          height: 100%;

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
        }

        &:hover {
          color: ${primaryColor.active};

          img {
            filter: none;
          }
        }
      }
    }
  }

  ${Media.smallTablet`
    div {
      justify-content: center;
      max-width: 500px;
      margin-bottom: 120px;

      ul {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 40px;

        li {
          margin-bottom: 40px;
        }
      }
    }
  `}

  ${Media.phone`
    div {
      margin-bottom: 102px;

      ul {
        width: 100%;
        max-width: 250px;

        grid-template-columns: repeat(2, auto);
        grid-gap: 20px;
        margin: 0 auto;
      }
    }
  `}
`;

export const SubTitle = styled(SubT)`
  text-align: center;

  &::after,
  &::before {
    content: none;
  }

  &:first-child {
    margin-top: 16px;
  }

  ${Media.phone`
    margin-bottom: 32px;
  `}

  @media (min-width: ${width.phone}px) {
    &:first-child {
      text-align: left;

      &::after {
        content: '';
      }
    }

    &:nth-child(3) {
      margin-left: auto;
      text-align: right;

      &::before {
        content: '';
      }
    }
  }
`;
