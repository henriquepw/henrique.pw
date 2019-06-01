import React, { useState } from 'react';
import { Content, Card, Date } from './styles';

interface TimelineProps {
	title: string;
	subTitle: string;
	init: number;
	final: number;
	left?: boolean;
}

const TimelineItem = (props: TimelineProps) => {
	const { title, init, final, subTitle, left } = props;
	const [scale] = useState(1);

	return (
		<Content left={left}>
			<Date left={left}>
				<h3>
					{init}
					<br />
					{final}
				</h3>
			</Date>
			<Card left={left} scale={scale}>
				<h1>{title}</h1>
				<h2>{subTitle}</h2>
			</Card>
		</Content>
	);
};

export default TimelineItem;
