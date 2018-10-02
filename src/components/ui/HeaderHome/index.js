import { generator } from 'uigradients';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { colors } = theme;

const HeaderHome = styled.header`
  color: ${colors.white};

  ${props =>
    props.science &&
    css`
      ${generator({ gradient: 'ali', type: 'ellipse' })} padding: 3.8% 0;
    `};

  ${props =>
    props.sport &&
    css`
      ${generator({
        gradient: 'electric_violet',
        type: 'radial'
      })} padding: 3.8% 0;
    `};
`;

export default HeaderHome;
