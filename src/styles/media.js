import { css } from 'styled-components';

const windows = {
    phone: 470,
    tablet: 768,
    desktop: 992,
    gient: 1170
};

export default Object.keys(windows).reduce(
    (media, size) => ({
        ...media,
        [size]: (...args) => css`
            @media (max-width: ${windows[size]}px) {
                ${css(...args)}
            }
        `
    }),
    {}
);