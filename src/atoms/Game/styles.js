import styled from 'styled-components';

import Img from 'gatsby-image';

import { primaryColor, secundaryColor } from '~/styles/colors';
import Media from '~/styles/media';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 1fr 128px;

  position: relative;
  background-color: ${primaryColor.active};
  color: ${secundaryColor.text};

  width: 480px;
  height: 280px;

  margin: 0px 289px 64px 0px;

  *::selection {
    background-color: ${primaryColor.text};
  }

  &:last-child {
    margin-bottom: 0px;
  }

  &:nth-child(even) {
    margin: 0px 0px 64px 289px;
    grid-template-columns: 128px 1fr;

    h1,
    p {
      text-align: right;
    }

    /* Image */
    div:first-child {
      grid-column: 1;
      grid-row: 1;

      transform: translateX(-289px);
    }
  }

  ${Media.tablet`
    grid-template-columns: auto;
    grid-template-rows: auto auto;

    width: 100%;
    height: 100%;

    max-width: 480px;

    margin: auto;
    margin-bottom: 64px;
    padding: 24px;

    h1,
    p {
      text-align: left !important;
    }

    &:nth-child(even) {
      grid-template-columns: auto;

      margin: auto;
      margin-bottom: 64px;

      div:first-child {
        transform: none;
        margin: auto;
      }
    }
  `}

  ${Media.bigPhone`
    max-width: 440px;
  `}
`;

export const Image = styled(Img)`
  width: 417px;
  height: 200px;
  margin: auto;

  grid-row: 1;
  grid-column: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;

  ${Media.tablet`
    grid-column: 1;

    width: 100%;
    height: 100%;

    margin: auto;
    margin-top: 0;
  `}
`;

export const Description = styled.div`
  margin: 40px 32px auto 40px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }

  p {
    width: 100%;
    max-width: 285px;

    line-height: 1.25rem;
    letter-spacing: 0.03rem;
  }

  ${Media.tablet`
    grid-row: 2;
    grid-column: 1;

    margin: 0px;
    margin-top: 24px;

    h1 {
      margin-bottom: 8px;
    }

    p {
      max-width: none;
      line-height: 1.5rem;
    }
  `}
`;
