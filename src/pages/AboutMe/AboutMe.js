import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';
import Games from '../../components/Games/Games';

import { Section, Center } from '../../styles/grid';

export default () => (
	<Section>
		<Header title='About me :)' margin='0 0 70px 0' dividerMedia='hidden' />
		<Center direction='column'>
			<Games />
		</Center>
		<Next to='/' />
	</Section>
);
