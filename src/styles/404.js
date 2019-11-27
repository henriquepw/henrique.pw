import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import Layout from '~/components/Layout';
import { primaryColor, secundaryColor } from '~/styles/colors';

const animationSlider = (x = '0', y = '0') => keyframes`
  0% {
    opacity: 0;
    transform: translate(${x}, ${y});
  }
`;

export const Container = styled(Layout)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  h1,
  h2,
  h3,
  span,
  strong {
    font-weight: 300;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 20em;
      color: ${primaryColor.active};
      animation: _404 1.2s 1 ease-out;

      letter-spacing: 10px;
      user-select: none;

      span {
        letter-spacing: normal;
      }
    }

    h2 {
      font-size: 2em;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-38%, -65%);
      animation: ${animationSlider('-34.5%', '120%')} 1.5s 1 ease-out;
    }
  }

  h3 {
    font-size: 3.2em;
    margin-bottom: 7em;
    animation: ${animationSlider('-0.5em')} 1.3s 1 ease-out;
  }

  @keyframes _404 {
    0% {
      opacity: 0;
      letter-spacing: 0.5em;
    }
  }
`;

export const Button = styled(Link)`
  border: 1px solid ${primaryColor.active};
  border-radius: 30px;
  font-size: 1.2em;

  margin-top: 3em;
  padding: 15px 30px;
  transition: 0.2s;
  animation: ${animationSlider('2em')} 1.3s 1 ease-out;

  &:hover,
  &:focus {
    box-shadow: 3px 3px 15px -1px ${primaryColor.text};
    background-color: ${primaryColor.active};
    color: ${secundaryColor.text};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 2px -1px ${primaryColor.text};
  }
`;
