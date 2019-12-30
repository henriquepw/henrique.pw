import styled from 'styled-components';

import { primaryColor, secundaryColor } from '~/styles/colors';
import Media, { width } from '~/styles/media';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  margin-bottom: 64px;
  transition: 0.3s;

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    transition: 0.3s ease;

    margin: 8px 0px auto;

    color: ${primaryColor.active};
    text-align: right;
  }

  span {
    display: none;
  }

  div {
    background-color: ${secundaryColor.text};
    position: relative;

    max-width: 360px;

    border-right: 2px solid ${primaryColor.active};
    border-left: 2px solid ${primaryColor.active};

    padding: 16px;
    transition: 0.2s ease;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    p {
      font-size: 1rem;
    }
  }

  &:hover {
    cursor: default;

    h2 {
      transform: translateY(-4px) scale(1.2);
    }

    div {
      border-left: 4px solid ${primaryColor.active};
      border-right: 4px solid ${primaryColor.active};

      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);

      transform: translateX(2px) scale(1.05);
    }
  }

  ${Media.tablet`
    grid-template-columns: auto;
    margin-bottom: 48px;

    text-align: center;

    h2 {
      text-align: center;
      letter-spacing: 8px;
      font-weight: 400;

      margin: 0 0 -16px 0;
      z-index: 1;
    }

    div {
      padding: 24px;

      h1 {
        font-size
      }
    }
  `}

  @media (min-width: ${width.tablet + 1}px) {
    span {
      display: block;
      position: relative;
      box-sizing: content-box;
      transition: 0.3s ease;

      width: 8px;
      height: 8px;

      grid-column: 2;
      grid-row: 1;

      margin: calc(32px - 5px) 56px 0px;

      border-radius: 50%;
      border: 2px solid ${primaryColor.active};
      background-color: ${primaryColor.active};
    }

    div {
      &::before {
        content: '';
        position: absolute;

        top: 16px;
        left: -16px;

        border-top: 16px solid transparent;
        border-bottom: 16px solid transparent;
        border-right: 16px solid ${secundaryColor.text};
      }

    }

    &:hover {
      h2 {
        transform: scale(1.3);
      }

      span {
        background-color: ${secundaryColor.bg};
        border: 2px solid ${primaryColor.active};
        transform: scale(1.5);
      }
    }

    &:nth-child(odd) {
      h2 {
        margin-left: auto;
      }

      div {
        border-left: none;
      }
    }

    &:nth-child(even) {

      &:hover {
        h2 {
          transform: scale(1.3);
        }
      }

      h2 {
        grid-column: 3/3;
        grid-row: 1;

        text-align: left;
        margin-right: auto;
      }

      div {
        grid-column: 1;
        grid-row: 1;

        border-right: none;

        text-align: right;

        &::before {
          left: auto;
          right: -16px;

          border-right: none;
          border-left: 16px solid ${secundaryColor.text};
        }
      }
    }
  }
`;
