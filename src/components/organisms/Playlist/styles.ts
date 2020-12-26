import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface TrackItemProps {
  isSelected: boolean;
}

export const Container = styled.section`
  padding-bottom: 100px;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    > div {
      position: relative;
      margin-top: 96px;

      &::before {
        content: '';
        position: absolute;

        top: -24px;
        right: -24px;

        width: 100%;
        height: 100%;

        border: 1px solid ${({ theme }) => theme.colors.active};
        z-index: -1;
      }
    }
  }

  img {
    max-height: 416px;
  }
`;

export const TrackList = styled.dl`
  flex: 1;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  text-shadow: 0 0 ${({ theme }) => theme.colors.text};
  color: rgba(0, 0, 0, 0);
  transition: color 0.2s ease-in;

  width: 100%;
  height: 100%;
  max-width: 560px;
  max-height: 576px;
  overflow-y: scroll;
  padding: 16px 4px 16px 24px;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 20px;
    background-clip: padding-box;
    border: 8px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }

  &:hover {
    color: ${({ theme }) => opacify(-0.5, theme.colors.active)};
  }
`;

export const TrackItem = styled.div<TrackItemProps>`
  padding: 16px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.colors.text};
  }

  dt {
    font-size: 1.5rem;
    transition: color 0.2s ease-out;
  }

  dd {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
  }

  &:hover {
    dt {
      color: ${({ theme }) => theme.colors.active};
    }
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      dt {
        color: ${theme.colors.active};
      }
    `}
`;
