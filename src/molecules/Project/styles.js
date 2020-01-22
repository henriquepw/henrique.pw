import styled from 'styled-components';

import { primaryColor } from '~/styles/colors';

export const Container = styled.li`
  background-color: #fff;

  width: 100%;
  height: 100%;

  max-width: 325px;
  max-height: 154px;

  border-left: 2px solid ${primaryColor.active};
  border-right: 2px solid ${primaryColor.active};
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.05);

  /* overflow: hidden; */
  text-align: center;
  transition: 0.3s ease;
  position: relative;
  cursor: pointer;

  h1 {
    font-weight: 400;
    font-size: 1.5rem;

    margin: 16px 0;
  }

  p {
    transition: 0.3s ease;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 24px 36px 16px 36px;
    color: ${primaryColor.active};
  }

  button {
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

    button {
      transform: translate(-50%, -50%);
      pointer-events: all;
      opacity: 1;
    }

    &::after {
      content: '';
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: ${primaryColor.text};
      opacity: 0.1;
    }
  }
`;
