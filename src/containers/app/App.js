import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/logo.svg';

import H1 from '../../components/ui/H1';
import HeaderHome from '../../components/ui/HeaderHome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppWapper = styled.div`text-align: center;`;

const spin = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;

class App extends Component {
  render() {
    return (
      <AppWapper>
        <HeaderHome>
          <Logo src={logo} className="App-logo" alt="logo" />
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
        </HeaderHome>
      </AppWapper>
    );
  }
}

export default App;
