import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  border: 1px solid ${({ theme }) => theme.colors.active};

  width: 100%;
  height: 100%;
`;
