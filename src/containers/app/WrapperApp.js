import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    color: red;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  #root {
    height: 100%;
  }
`;

const WrapperApp = styled.div`height: 100%;`;

export default WrapperApp;
