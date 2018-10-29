import { generator } from 'uigradients';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { colors } = theme;

const HeaderHome = styled.header`
  color: ${colors.white};
  position: fixed;
  width: 100%;
  position: fixed;
  padding: 3.8% 0;
  border-bottom: 1px white solid;

  ${props =>
    props.science &&
    css`
      ${generator({
        gradient: 'ali',
        type: 'ellipse'
      })};
    `};

  ${props =>
    props.business &&
    css`
      ${generator({
        gradient: 'amethyst',
        type: 'ellipse'
      })};
    `};

  ${props =>
    props.sport &&
    css`
      ${generator({
        gradient: 'electric_violet',
        type: 'radial'
      })};
    `};
`;

export default HeaderHome;
