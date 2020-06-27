import styled from 'styled-components';

import Section from '~/styles/section';

export const Container = styled(Section)`
  p {
    text-align: left;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
    font-size: 1.2rem;

    width: 100%;
    max-width: 880px;
  }

  p + p {
    margin-top: 16px;
  }
`;
