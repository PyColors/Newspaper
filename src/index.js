import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider } from 'react-intl';

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
