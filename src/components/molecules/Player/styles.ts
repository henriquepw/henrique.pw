import styled, { css } from 'styled-components';

import { opacify } from 'polished';

import Media from '~/styles/media';

interface MusicProps {
  selected?: boolean;
}

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 658px;
  margin-bottom: 80px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 72px;

    background-color: ${({ theme }) => theme.primary.active};
    color: ${({ theme }) => theme.secondary.text};

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        cursor: pointer;
        stroke-width: 1;
        -webkit-tap-highlight-color: transparent;
      }

      &:nth-child(2) {
        margin: auto 16px;
      }
    }
  }

  div {
    width: 100%;
    max-width: 288px;
    margin-right: 32px;
    background-color: ${({ theme }) => theme.secondary.background};
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);

    ol {
      height: 100%;
      max-height: 312px;

      padding: 0px 8px;
      overflow-y: scroll;
    }
  }

  > a {
    max-width: 250px;
    max-height: 250px;
    transition: 0.4s ease;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.25);
      transform: scale(1.05);
    }

    &:focus {
      outline: 3px solid ${({ theme }) => theme.primary.active};
      outline-offset: 8px;
    }
  }

  ${Media.bigPhone`
    width: auto;
    position: relative;

    div {
      max-width: 320px;
      margin: 0px auto;

      header {
        padding-left: 56px;
      }
    }

    > a {
      position: absolute;

      top: 8px;
      left: 8px;

      width: 56px;
      height: 56px;
    }
  `}
`;

export const Music = styled.li<MusicProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0px;
  margin: 0px 8px;

  white-space: nowrap;
  transition: 0.4s ease;

  button {
    overflow: hidden;
    margin-right: 16px;
    transition: 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primary.active};
    }

    &:focus {
      outline: 3px solid ${({ theme }) => theme.primary.active};
      outline-offset: 3px;
    }
  }

  a {
    display: flex;
    border-radius: 50%;

    svg {
      transition: 0.3s ease;
    }

    &:hover svg {
      color: ${({ theme }) => theme.primary.active};
      transform: scale(1.1);
    }

    &:focus {
      color: ${({ theme }) => theme.primary.active};

      box-shadow: 0 0 0 2px ${({ theme }) => theme.primary.background},
        0 0 0 4px ${({ theme }) => theme.primary.active};
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => opacify(-0.5, theme.primary.text)};
  }

  ${({ selected }) =>
    selected &&
    css`
      button {
        color: ${({ theme }) => theme.primary.active};
        font-weight: 600;
      }
    `}
`;
