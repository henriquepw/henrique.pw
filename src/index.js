import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './pages/App/App';

ReactDOM.render(
	<BrowserRouter basename={`${process.env.PUBLIC_URL}/portfolio`}>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.register();
