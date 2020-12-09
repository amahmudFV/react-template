import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function render(props) {
	ReactDOM.render(<App />, document.getElementById('root'));
}

//Adding functions to window to access from outside this package
window.render = render;
