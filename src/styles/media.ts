import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

type MediaFn = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

interface ObjectOf<T> {
  [key: string]: T;
}

// TODO: refactor for fewer sizes
export const width: ObjectOf<number> = {
  smallPhone: 400,
  phone: 500,
  bigPhone: 620,
  smallTablet: 720,
  tablet: 800,
  smallDesktop: 980,
  hd: 1366,
};

/**
 * Return a function for use media query with a defined max-width
 * on styled-components.
 * This function is only used to create the media object.
 *
 * Example:
 *  mediaFactory(1000)`
 *    height: 100px;
 * `;
 *
 * is equal to use:
 *  @media (max-width: 1000px) {
 *    height: 100px;
 *  }
 */
function mediaFactory(size: string): MediaFn {
  return (...args) => css`
    @media (max-width: ${width[size]}px) {
      ${css(...args)};
    }
  `;
}

/**
 * Return an object with the most common media queries used on this project.
 *
 * Example:
 *  mediaFactory(1000)`
 *    height: 100px;
 * `;
 *
 * is equal to use:
 *  @media (max-width: 1000px) {
 *    height: 100px;
 *  }
 */
export default Object.keys(width).reduce(
  (media, size: string) => ({ ...media, [size]: mediaFactory(size) }),
  {} as ObjectOf<MediaFn>,
);
