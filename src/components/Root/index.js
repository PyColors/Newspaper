import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../containers/app/App';
import Science from '../../containers/science/index';
import Sport from '../../containers/sport/index';
import Business from '../../containers/business/index';
import NotFound from '../../containers/not-found/index';

const Index = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/science" component={Science} />
        <Route path="/sport" component={Sport} />
        <Route path="/business" component={Business} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

Index.propTypes = {
  store: PropTypes.object.isRequired
};

export default Index;
