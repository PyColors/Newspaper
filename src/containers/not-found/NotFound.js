import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/ui/H1';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/ui/HeaderHome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { generator } from 'uigradients';

const App = () => {
  const Global = styled.div`
      text-align: center;
      margin: 0 auto;
      height:100%;
      color: white;
      ${generator({
        gradient: 'electric_violet',
        type: 'radial'
      })} 
    \`};
    `;

  return (
    <Global>
      <HeaderHome sport>
        <H1>
          <FormattedMessage {...messages.titleMessage} />
        </H1>
      </HeaderHome>
      <Footer />
    </Global>
  );
};

export default App;
