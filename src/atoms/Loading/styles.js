import styled from 'styled-components';

import { primaryColor } from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${primaryColor.bg};

  svg {
    margin: auto;
    animation: spinning 4s infinite linear;
    color: ${primaryColor.active};
    opacity: 0.7;
  }

  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
