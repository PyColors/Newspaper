import React from 'react';
import { COLOR_ICONS, ICONS } from '../../utils/constants';
import SvgIcon from '../ui/SvgIcon';

const Footer = () => (
  <footer>
    <p>Made with ♥ by Py Colors</p>
    <a href="https://github.com/PyColors/Newspaper">
      <SvgIcon icon={ICONS.FACEBOOK} color={COLOR_ICONS.BLACK} />
    </a>
  </footer>
);

export default Footer;
