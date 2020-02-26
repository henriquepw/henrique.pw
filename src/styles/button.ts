import { css, keyframes } from 'styled-components';

import { primaryColor, secundaryColor } from './colors';
import Media from './media';

const slider = (x = '0', y = '0') => keyframes`
  0% {
    opacity: 0;
    transform: translate(${x}, ${y});
  }
  50% {
    opacity: 0.3;
  }
`;

export default css`
  border: 1px solid ${primaryColor.active};
  border-radius: 30px;
  user-select: none;
  font-size: 1.125rem;

  margin-top: 88px;
  padding: 16px 32px;
  transition: 0.2s;
  animation: ${slider('2em')} 1.3s 1 ease-out;
  color: ${primaryColor.active};

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

  ${Media.tablet`
    font-size: 1em;

    &:hover,
    &:focus {
      box-shadow: 2px 2px 10px -2px ${primaryColor.text};
    }

    &:active {
      box-shadow: 2px 2px 2px -2px ${primaryColor.text};
    }
  `}
`;
