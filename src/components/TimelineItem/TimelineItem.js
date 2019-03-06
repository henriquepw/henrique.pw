import React from 'react';
import {
	Box,
	Card,
	Div,
	Timeline,
	HalfMoon,
	Circle
} from './TimelineItem.style.js';

export default ({ title, date, subTitle, init }) => (
	<Box>
		<h3>{date}</h3>
		<Card init={init}>
			<h1>{title}</h1>
			<h2>{subTitle}</h2>
		</Card>
		<Div>
			<HalfMoon init={init} />
			<Timeline init={init} />
			<Circle init={init} />
			<Timeline init={init} />
			<HalfMoon init={init} end />
		</Div>
	</Box>
);
