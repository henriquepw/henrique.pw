import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './pages/App/App';

ReactDOM.render(
	<BrowserRouter basename='/portfolio'>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
