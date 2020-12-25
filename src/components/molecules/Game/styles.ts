import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;

  margin: 24px;
`;

export const Content = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.secondaryBackground};

  padding: 32px;
  max-width: 469px;
  min-height: 280px;
  padding-right: 112px;

  h3 {
    font-size: 1.5rem;
    letter-spacing: 0.03em;
    margin-bottom: 16px;
  }

  p {
    line-height: 1.75em;
    letter-spacing: 0.03em;
    margin-right: 40px;
  }

  &::before {
    content: '';
    position: absolute;

    top: -24px;
    left: -24px;

    height: 100%;
    width: calc(100% + 48px);

    border: 1px solid ${({ theme }) => theme.colors.active};
    z-index: -1;
  }
`;

export const ImageContainer = styled.div`
  margin-left: -112px;
  height: 200px;

  img {
    height: 200px;
    width: 408px;
  }
`;
