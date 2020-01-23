import styled from 'styled-components';

import { primaryColor } from '~/styles/colors';
import Media from '~/styles/media';

export const Container = styled.li`
  background-color: #fff;

  width: 100%;
  height: 100%;

  max-width: 325px;
  height: 160px;

  border-left: 2px solid ${primaryColor.active};
  border-right: 2px solid ${primaryColor.active};
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.05);

  overflow: hidden;
  text-align: center;
  transition: 0.3s ease;
  position: relative;
  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    h1,
    ul {
      text-transform: capitalize;
    }

    h1 {
      font-weight: 400;
      font-size: 1.5rem;

      margin: 16px 0;
    }

    p {
      margin: auto 24px;
      transition: 0.3s ease;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 16px 24px;
      color: ${primaryColor.active};
      font-size: 0.875rem;

      li + li {
        margin-left: 8px;
      }
    }
  }

  span {
    position: absolute;
    color: ${primaryColor.active};

    top: 50%;
    left: 50%;

    transform: translate(-50%, calc(-50% + 30px)) translateZ(0);
    transition: 0.3s ease;
    transition: 0.2 ease;

    pointer-events: none;
    font-weight: 400;
    opacity: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: ${primaryColor.active};

      top: 50%;
      right: calc(100% + 8px);
      transform: translateY(-50%) translateZ(0);

      height: 1px;
      width: 16px;
    }

    &:after {
      right: auto;
      left: calc(100% + 8px);
    }
  }

  &:hover {
    transform: translateY(-5px) translateZ(0);
    user-select: none;

    h1,
    ul {
      filter: blur(1px);
    }

    p {
      opacity: 0;
      transform: translateY(-30px) translateZ(0);
    }

    span {
      transform: translate(-50%, -50%);
      user-select: auto;
      pointer-events: all;
      opacity: 1;
    }

    &::after {
      content: '';
      position: absolute;
      pointer-events: none;

      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: ${primaryColor.text};
      opacity: 0.1;
    }
  }

  ${Media.bigPhone`
    a {
      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.15rem;
      }

      ul {
        font-size: 1rem;
      }
    }
  `}
`;
