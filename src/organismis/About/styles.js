import styled from 'styled-components';
import Section from '~/styles/Section';

export const Container = styled(Section)`
  p {
    text-align: left;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;

    width: 100%;
    max-width: 980px;
  }

  p + p {
    margin-top: 16px;
  }
`;
