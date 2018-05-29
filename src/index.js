import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app/App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider } from 'react-intl';
import WrapperApp from './containers/app/WrapperApp';

const store = configureStore();

ReactDOM.render(
  <IntlProvider locale="en">
    <WrapperApp>
      <Provider store={store}>
        <App />
      </Provider>
    </WrapperApp>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
