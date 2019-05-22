import React from 'react';
import Routes from '../../routes';

import Navigator from '../../components/Navigator';
import GlobalStyle from '../../styles/globalStyle';
import { Container } from './App.style';

const App = () => (
	<Container>
		<GlobalStyle />
		<Navigator />
		<Routes />
	</Container>
);

export default App;
