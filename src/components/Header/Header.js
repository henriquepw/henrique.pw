import React from 'react';
import { Divider } from '../../styles/shapes';
import { Container } from './Header.style';

export default ({ title, margin, center }) => (
	<Container center={center}>
		<h1>{title}</h1>
		<Divider margin={margin || '0'} size='500px' dividerMedia='hidden' />
	</Container>
);
