import styled from 'styled-components';

export const Container = styled.h2`
  position: relative;

  font-size: 1.9rem;
  font-weight: 400;

  margin: 80px 0 64px;

  &::before,
  &::after {
    content: '';
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.primary.active};

    width: 32px;
    height: 1px;
    margin: 0px 16px;
    border-radius: 1px;
  }

  &::before {
    left: -64px;
  }
`;
