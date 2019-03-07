import { css } from 'styled-components';

const windows = {
	small: 480,
	phone: 639,
	tablet: 1044,
	desktop: 1158,
	gient: 1575
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
