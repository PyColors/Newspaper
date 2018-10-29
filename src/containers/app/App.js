import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoNewspaper, LogoNewspaperLink } from '../../helpers/styles';
import H1 from '../../components/ui/H1';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/ui/Header';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const App = () => {
  const Global = styled.div`
    text-align: center;
    margin: 0 auto;
    height: 100%;
    color: white;
  `;

  const H3 = styled.h3`
    color: white;
  `;

  return (
    <Global>
      <HeaderHome sport>
        <LogoNewspaperLink href="/">
          <LogoNewspaper size="54" title="Logo" />
        </LogoNewspaperLink>
        <H1>
          <FormattedMessage {...messages.titleMessage} />
        </H1>
        <Link to="/sport">
          <H3>
            <FormattedMessage {...messages.sports} />
          </H3>
        </Link>
        <Link to="/science">
          <H3>
            <FormattedMessage {...messages.science} />
          </H3>
        </Link>
        <Link to="/business">
          <H3>
            <FormattedMessage {...messages.business} />
          </H3>
        </Link>
        <Footer />
      </HeaderHome>
    </Global>
  );
};

export default App;
