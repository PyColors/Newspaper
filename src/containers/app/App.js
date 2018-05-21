import React, { Component } from 'react';
import styled from 'styled-components';
import H1 from '../../components/ui/H1';
import HeaderHome from '../../components/ui/HeaderHome';
import Button from '../../components/ui/Button';

import GetData from '../../components/GetData';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppWapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWapper>
        <HeaderHome>
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
          <Button primaryTwo>
            <FormattedMessage {...messages.sports} />{' '}
          </Button>
          <Button primaryTwo>
            <FormattedMessage {...messages.travel} />{' '}
          </Button>
          <Button secondaryOne>
            <FormattedMessage {...messages.science} />{' '}
          </Button>
        </HeaderHome>
        <GetData />
      </AppWapper>
    );
  }
}

export default App;
