import styled from 'styled-components';

import Section from '~/styles/section';

export const Container = styled(Section)`
  min-height: 100vh;

  > ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px;

    margin-top: 16px;
  }
`;
