import styled from 'styled-components';
import React from 'react';
import { LogoGithub } from 'styled-icons/octicons/LogoGithub';
import theme from '../../styles/theme';

const { colors } = theme;

const LogoGithubWhite = styled(LogoGithub)`
  color: ${colors.white};
`;

const Footer = () => (
  <footer>
    <p>Made with ♥ by Py Colors</p>
    <a href="https://github.com/PyColors/Newspaper">
      {' '}
      <LogoGithubWhite size="48" title="Logo Github" />{' '}
    </a>
  </footer>
);

export default Footer;
