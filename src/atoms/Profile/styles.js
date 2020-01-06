import styled, { keyframes } from 'styled-components';

import Img from 'gatsby-image';
import { lighten } from 'polished';

import { primaryColor } from '~/styles/colors';

const wave = keyframes`
  80%, 100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export const Container = styled(Img)`
  width: 148px;
  height: 148px;
  transition: 0.5s;
  position: relative;

  user-select: none;
  border-radius: 50%;
  border: 10px solid ${lighten(0.25, primaryColor.active)};
  background-clip: padding-box;
  overflow: visible !important;

  img {
    border-radius: 50%;
  }

  &::after {
    content: '';
    top: -10px;
    left: -10px;
    position: absolute;

    width: calc(100% + 18px);
    height: calc(100% + 18px);

    border: 1px solid ${lighten(0.25, primaryColor.active)};
    border-radius: 50%;

    animation: ${wave} 2s infinite linear;
  }
`;
