import { css } from 'styled-components';

export default css`
  height: 48px;
  line-height: 48px;
  padding: 0 24px;

  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.h5};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.active};
    color: ${({ theme }) => theme.colors.active};
  }
`;
