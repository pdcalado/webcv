import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import data from 'data.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App data={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
