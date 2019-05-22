import React from 'react';
import { Card } from './Project.style';

type ProjectProps = {
	title: string,
	description: string
};

export default ({ title, description }: ProjectProps) => (
	<Card>
		<h1>{title}</h1>
		<p>{description}</p>
	</Card>
);
