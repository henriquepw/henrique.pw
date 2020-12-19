import styled from 'styled-components';

export const Container = styled.li`
  display: flex;

  > div:first-of-type {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    padding: 32px;

    max-width: 469px;

    h3 {
      margin-bottom: 24px;
    }
  }

  > div:last-of-type {
    height: 200px;
    width: auto;
  }
`;
