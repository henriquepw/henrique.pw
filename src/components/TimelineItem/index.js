import React, { Component } from 'react';
import { Content, Card, Date } from './TimelineItem.style';

type TimelineProps = {
	title: string,
	subTitle: string,
	init: number,
	final: number,
	left: boolean
};

type TimelineState = {
	scale: number
};

class TimelineItem extends Component<TimelineProps, TimelineState> {
	constructor(props) {
		super(props);

		this.state = {
			scale: 1
		};
	}

	render() {
		const { title, init, final, subTitle, left } = this.props;
		const { scale } = this.state;
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
	}
}

export default TimelineItem;
