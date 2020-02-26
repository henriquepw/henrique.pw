import {
  css,
  FlattenSimpleInterpolation,
  CSSObject,
  SimpleInterpolation,
} from 'styled-components';

interface Media {
  [key: string]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
}

interface Width {
  [key: string]: number;
}

export const width: Width = {
  smallPhone: 400,
  phone: 500,
  bigPhone: 620,
  smallTablet: 720,
  tablet: 800,
  smallDesktop: 980,
  hd: 1366,
};

export default Object.keys(width).reduce(
  (media: Media, _size: string) => ({
    ...media,
    [_size]: (...args) => css`
      @media (max-width: ${width[_size]}px) {
        ${css(...args)};
      }
    `,
  }),
  {}
);
