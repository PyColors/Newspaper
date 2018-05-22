import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider } from 'react-intl';
import WrapperApp from './containers/app/WrapperApp';

ReactDOM.render(
  <IntlProvider locale="en">
    <WrapperApp>
      <App />
    </WrapperApp>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
