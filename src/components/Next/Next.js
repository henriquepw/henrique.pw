import React from 'react';
import Icon from '../Icon/Icon';

import { Button } from './Next.style';

export default ({ to }) => (
	<Button to={to}>
		<label>{to.substr(1).toUpperCase()}</label>
		<Icon name='next' noHover />
	</Button>
);
