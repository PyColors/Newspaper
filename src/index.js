import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider } from 'react-intl';
import WrapperApp from './containers/app/WrapperApp';

const store = configureStore();

ReactDOM.render(
  <IntlProvider locale="en">
    <WrapperApp>
      <Root store={store} />
    </WrapperApp>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
