import styled from 'styled-components';

import button from '~/styles/button';
import Media from '~/styles/media';
import Section from '~/styles/section';

export const Container = styled(Section)`
  min-height: 100vh;

  > ul {
    max-width: 1100px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;

    margin-top: 16px;
    margin-bottom: 80px;
  }

  ${Media.hd`
    > ul {
      gap: 32px;
    }
  `}

  ${Media.smallDesktop`
    > ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 64px;
    }
  `}

  ${Media.tablet`
    > ul {
      gap: 32px;
    }
  `}

  ${Media.smallTablet`
    > ul {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  `}

  > a {
    ${button}

    display: flex;
    align-items: center;

    margin: auto 0 80px;
    padding: 12px 24px;

    svg {
      width: 32px;
      height: 32px;

      margin-left: 8px;
    }
  }
`;
