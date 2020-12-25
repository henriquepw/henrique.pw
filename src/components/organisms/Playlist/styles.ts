import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 100px;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    > div {
      position: relative;
      margin-top: 24px;

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

  width: 100%;
  height: 100%;
  max-width: 560px;
  max-height: 576px;
  overflow-y: scroll;
  padding: 16px;

  div {
    padding: 16px;
  }

  div + div {
    border-top: 1px solid ${({ theme }) => theme.colors.text};
  }

  dt {
    font-size: 1.5rem;
  }

  dd {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;

export const TrackControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background: ${({ theme }) => theme.colors.secondaryBackground};
  padding: 24px 40px;
  margin: 48px 0 0 16px;

  svg {
    cursor: pointer;
    stroke-width: 1px;
  }

  &::before {
    content: '';
    position: absolute;

    top: 16px;
    left: -16px;

    width: 100%;
    height: 100%;

    border: 1px solid ${({ theme }) => theme.colors.active};
    z-index: -1;
  }
`;
