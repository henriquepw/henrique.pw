import { css } from 'styled-components';

export const windows = {
  smallPhone: 400,
  phone: 500,
  bigPhone: 620,
  smallTablet: 720,
  tablet: 800,
  smallDesktop: 980,
  hd: 1366,
};

export default Object.keys(windows).reduce(
  (media, _size) => ({
    ...media,
    [_size]: (...args) => css`
      @media (max-width: ${windows[_size]}px) {
        ${css(...args)};
      }
    `,
  }),
  {}
);
