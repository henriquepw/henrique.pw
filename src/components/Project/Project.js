import React from 'react';
import { Card } from './Project.style.js';

export default props => (
	<Card>
		<h1>{props.title}</h1>
		<p>{props.description}</p>
	</Card>
);
