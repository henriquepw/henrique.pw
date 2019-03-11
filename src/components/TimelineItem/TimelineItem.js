import React from 'react';
import { Content, Card, Date } from './TimelineItem.style';

export default props => {
	const { title, init, final, subTitle, left } = props;
	return (
		<Content left={left}>
			<Date left={left}>
				<h3>
					{init}
					<br />
					{final}
				</h3>
			</Date>
			<Card left={left}>
				<h1>{title}</h1>
				<h2>{subTitle}</h2>
			</Card>
		</Content>
	);
};
