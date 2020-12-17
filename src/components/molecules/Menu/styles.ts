import styled, { css } from 'styled-components';

interface NavigateProps {
  isSelected?: boolean;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  padding: 32px 0;
`;

export const ExtraConfigs = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 64px;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li + li {
      margin-top: 32px;
    }
  }
`;

export const Navigator = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  writing-mode: vertical-rl;
  text-orientation: mixed;

  width: 64px;
  height: 100%;

  li + li {
    margin-top: 64px;
  }
`;

export const NavigateItem = styled.li<NavigateProps>`
  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      a {
        color: ${theme.colors.active};
      }
    `}
`;

export const NavigateButton = styled.button.attrs({
  type: 'button',
})<NavigateProps>`
  position: relative;

  span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      color: ${theme.colors.active};
    `}

  &:hover {
    border: none;

    span {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;
