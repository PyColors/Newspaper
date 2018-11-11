import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Root/index';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider } from 'react-intl';
import WrapperApp from './containers/app/WrapperApp';

const store = configureStore();

ReactDOM.render(
  <IntlProvider locale="en">
    <WrapperApp>
      <Index store={store} />
    </WrapperApp>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
