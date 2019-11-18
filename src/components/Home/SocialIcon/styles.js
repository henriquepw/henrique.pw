import styled from 'styled-components';

import { primaryColor } from '~/styles/colors';

export const Container = styled.a`
  padding: 0 20px;

  svg {
    transition: transform 0.2s;
    cursor: pointer;
    height: 30px;
    width: 30px;
  }

  svg:hover {
    color: ${primaryColor.active};
    transform: scale(1.25);
  }

  svg:active {
    transform: scale(1.1);
  }
`;
