import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';

import { Section, Building } from '../../styles/grid';

export default () => (
	<Section>
		<Header title='About me :)' margin='0 0 70px 0' dividerMedia='hidden' />
		<Building>Building...</Building>
		<Next to='/' />
	</Section>
);
