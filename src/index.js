import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'pages/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from 'data.js';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
