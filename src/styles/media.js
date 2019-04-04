import { css } from 'styled-components';

const windows = {
	small: 480,
	phone: 639,
	tablet: 1044,
	desktop: 1158,
	maxTimeline: 1365,
	phoneTimeline: 750,
	gient: 1575
};

export { windows };

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
