import styled from 'styled-components';

import Media from '~/styles/media';
import { primaryColor } from '~/styles/colors';

export const Container = styled.a`
  transition: 0.3s;
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

  &:focus {
    svg {
      outline: 3px solid ${primaryColor.active};
      outline-offset: 3px;
    }
  }

  ${Media.bigPhone`
    padding: 0 15px;

    svg {
      transform: scale(0.9);
    }

    svg:hover {
      transform: scale(1.15);
    }

    svg:active {
      transform: scale(1);
    }
  `}

  ${Media.phone`
    padding: 0px 10px;

    svg {
      transform: scale(0.75);
    }

    svg:hover {
      transform: scale(1.00);
    }

    svg:active {
      transform: scale(0.85);
    }
  `}
`;
