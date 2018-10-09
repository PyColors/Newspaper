import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import H1 from '../../components/ui/H1';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/ui/HeaderHome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppWapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    const Global = styled.div`
      width: 75%;
      margin: 0 auto;
    `;

    const Content = styled.div`
      display: inline-block;
      vertical-align: top;
      width: 75%;
      padding: 0;
    `;

    return (
      <AppWapper>
        <HeaderHome sport>
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
        </HeaderHome>

        <Global>
          <Content>
            <Link to="/sport">
              <FormattedMessage {...messages.sports} />
            </Link>
            <Link to="/science">
              <FormattedMessage {...messages.science} />
            </Link>
          </Content>
          <Footer />
        </Global>
      </AppWapper>
    );
  }
}

export default App;
