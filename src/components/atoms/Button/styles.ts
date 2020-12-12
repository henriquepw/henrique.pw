import styled from 'styled-components';

export const Container = styled.button`
  height: 48px;
  line-height: 48px;
  padding: 0 24px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.active};
  }
`;
