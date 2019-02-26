import React from 'react';
import { Divider } from '../../styles/shapes';
import { Container } from './Header.style';

export default ({ title, margin }) => (
	<Container>
		<h1>{title}</h1>
		<Divider margin={margin} size='500px' dividerMedia='hidden' />
	</Container>
);
