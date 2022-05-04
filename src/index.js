import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calculator from './components/calculator';
import './App.css';
import './index.css';

// Render the Calculator to the Web page.
ReactDOM.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>,
	document.getElementById('root'),
  );
