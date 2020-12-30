import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: content-box;

  label {
    position: absolute;
    font-size: 1.125rem;
    letter-spacing: 0.1em;
    cursor: pointer;
  }

  input,
  textarea {
    border: none;
    border-bottom: 4px solid transparent;
    background: transparent;

    color: ${({ theme }) => theme.colors.text};
    font-size: 1.125rem;
    min-height: 42px;

    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.active};
    }
  }
`;
