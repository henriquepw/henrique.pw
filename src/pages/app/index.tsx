import React from 'react';
import Routes from 'routes';

import { Container } from './styles';
import GlobalStyle from 'styles/globalStyle';
import Navigator from 'components/navigator';

const App: React.FC = () => {
	return (
		<Container>
			<GlobalStyle />
			<Navigator />
			<Routes />
		</Container>
	);
};

export default App;
