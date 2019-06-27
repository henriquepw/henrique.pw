import { css } from 'styled-components';

interface props {
  [key: string]: number;
}

interface media {
  small(...args: any[]): any;
  phone(...args: any[]): any;
  tablet(...args: any[]): any;
  desktop(...args: any[]): any;
  maxTimeline(...args: any[]): any;
  phoneTimeline(...args: any[]): any;
  gient(...args: any[]): any;
}

const windows: props = {
  small: 480,
  phone: 639,
  tablet: 1044,
  desktop: 1158,
  maxTimeline: 1365,
  phoneTimeline: 750,
  gient: 1575
};

export { windows };

const Media: media = Object.keys(windows).reduce(
  (media: any, size: string) => ({
    ...media,
    [size]: (...args: any[]) => css`
      @media (max-width: ${windows[size]}px) {
        ${css(args[0], ...args)}
      }
    `
  }),
  {}
);

export default Media;
