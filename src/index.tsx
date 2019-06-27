import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './pages/app';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
