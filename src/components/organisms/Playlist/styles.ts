import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface TrackItemProps {
  isSelected: boolean;
}

export const Container = styled.section`
  ${({ theme }) => css`
    padding-bottom: ${theme.baseSpace * 24}rem;

    > div {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;

      > div {
        position: relative;

        p {
          max-width: 560px;
          margin-left: ${theme.baseSpace * 6}rem;

          font-size: ${theme.fonts.sizes.h5};
          line-height: 1.5em;
          letter-spacing: 0.03em;
        }

        &::before {
          content: '';
          position: absolute;

          bottom: ${theme.baseSpace * 6}rem;
          left: ${theme.baseSpace * 6}rem;

          width: 100%;
          height: 100%;
          max-width: 560px;
          max-height: 576px;

          border: 1px solid ${theme.colors.active};
          z-index: -1;
        }
      }
    }

    aside {
      margin-top: ${theme.baseSpace * 16}rem;
    }

    a {
      display: block;
      cursor: pointer;
    }

    img {
      max-height: 416px;
    }
  `}
`;

export const TrackList = styled.dl`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.secondaryBackground};
    text-shadow: 0 0 ${theme.colors.text};
    color: rgba(0, 0, 0, 0);
    transition: color 0.2s ease-in;
    overflow-y: scroll;

    width: 100%;
    height: 100%;
    max-width: 560px;
    max-height: 576px;

    margin-top: ${theme.baseSpace * 22}rem;
    padding: ${theme.baseSpace * 4}rem ${theme.baseSpace}rem
      ${theme.baseSpace * 4}rem ${theme.baseSpace * 6}rem;

    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
      width: 20px;
      background-clip: padding-box;
      border: ${theme.baseSpace * 2}rem solid transparent;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 0 10px;
    }

    &:hover {
      color: ${opacify(-0.5, theme.colors.active)};
    }
  `}
`;

export const TrackItem = styled.div<TrackItemProps>`
  ${({ theme, isSelected }) => css`
    padding: ${theme.baseSpace * 4}rem;
    color: ${theme.colors.text};
    cursor: pointer;

    & + div {
      border-top: 1px solid ${theme.colors.text};
    }

    dt {
      font-size: ${theme.fonts.sizes.h5};
      transition: color 0.2s ease-out;
    }

    dd {
      color: ${theme.colors.text};
      opacity: 0.6;
    }

    &:hover {
      dt {
        color: ${theme.colors.active};
      }
    }

    ${isSelected &&
    css`
      dt {
        color: ${theme.colors.active};
      }
    `}
  `}
`;
