import React from 'react';
import Icon from '../Icon';

import { Button } from './Next.style';

type nextProps = {
	to: string
};

export default ({ to }: nextProps) => (
	<Button to={to}>
		<p>{to.substr(1).toUpperCase()}</p>
		<Icon name='next' noHover />
	</Button>
);
