import React from 'react';
import { Card } from './styles';

interface ProjectProps {
	title: string;
	description: string;
}

export default ({ title, description }: ProjectProps) => (
	<Card>
		<h1>{title}</h1>
		<p>{description}</p>
	</Card>
);
