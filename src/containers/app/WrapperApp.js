import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import theme from '../../styles/theme';

const { colors } = theme;

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    color: ${colors.black};
    font-size: 14px;
    font-family: "Avenir Next",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
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

const WrapperApp = styled.div`
  height: 100%;
`;

export default WrapperApp;
