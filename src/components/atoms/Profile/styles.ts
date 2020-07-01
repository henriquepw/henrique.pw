import styled, { keyframes } from 'styled-components';

import Img from 'gatsby-image';
import { lighten } from 'polished';

import { primaryColor } from '~/styles/colors';
import Media from '~/styles/media';

const wave = keyframes`
  80%, 100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

const showUp = keyframes`
  0%,
  70% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled(Img)`
  width: 160px;
  height: 160px;

  display: block;
  position: relative;
  box-sizing: border-box;

  transition: 0.5s;
  animation: ${showUp} 3s ease-out;

  border-radius: 50%;
  border: 10px solid ${lighten(0.25, primaryColor.active)};
  margin: -40px auto 40px auto;

  background-clip: padding-box;
  overflow: visible !important;
  user-select: none;

  img {
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;

    top: -10px;
    left: -10px;

    width: calc(100% + 18px);
    height: calc(100% + 18px);

    border: 1px solid ${lighten(0.25, primaryColor.active)};
    border-radius: 50%;

    animation: ${wave} 2s infinite linear;
  }

  ${Media.bigPhone`
    width: 140px;
    height: 140px;
  `}
`;
