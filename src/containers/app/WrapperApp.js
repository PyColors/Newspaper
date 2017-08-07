import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  #root {
    height: 100%;
  }

  html { font-size: 100% }
  p { font-size: 1em }

  @media (min-width: 64em) {
    html {
      font-size: 112.5%;
    }
  }
`;

const WrapperApp = styled.div`height: 100%;`;

export default WrapperApp;
