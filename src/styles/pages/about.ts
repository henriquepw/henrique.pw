import styled from 'styled-components';

import Layout from '@/components/templates/Layout';

export const Container = styled(Layout)`
  flex-direction: column;
`;

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  min-height: 100vh;

  > div:first-of-type {
    max-width: 575px;
    position: relative;

    padding: 32px;
    margin: 80px 80px 80px 0;

    &::before {
      content: '';
      position: absolute;

      top: 0;
      left: 0;

      height: 100%;
      width: 100%;

      border: 1px solid ${({ theme }) => theme.colors.active};
      z-index: -1;
    }

    svg {
      display: block;
      position: absolute;
      cursor: pointer;

      bottom: -8px;
      left: -8px;
      transform: translateX(-100%);
      color: ${({ theme }) => theme.colors.active};
    }

    p {
      margin: 0 64px 40px;

      font-size: 1.125rem;
      line-height: 1.5em;
      letter-spacing: 0.03em;
    }
  }
`;

export const Title = styled.h1`
  display: inline-block;
  position: absolute;

  height: 100%;
  margin: calc(-${({ theme }) => theme.fonts.sizes.h1} - 32px) 0 48px 16px;

  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;

    top: 1.8rem;
    left: 50%;
    transform: translateX(-50%);

    height: 100%;
    width: calc(100% + 32px);

    background: ${({ theme }) => theme.colors.secondaryBackground};
    z-index: -1;
  }
`;
