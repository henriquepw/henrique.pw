import styled from 'styled-components';

import { primaryColor } from '~/styles/colors';

export const Container = styled.ol`
  position: relative;
  margin-bottom: 80px;

  li:first-child {
    margin-top: 32px;
  }

  li:last-child {
    margin-bottom: 32px;
  }

  &::before {
    content: '';
    position: absolute;

    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 1px;
    height: 100%;

    background-color: ${primaryColor.active};
  }
`;
