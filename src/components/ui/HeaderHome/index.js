import { generator } from 'uigradients';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors } = theme;

const HeaderHome = styled.header`
  ${generator({ gradient: 'electric_violet', type: 'radial' })} height: 180px;
  padding: 20px;
  color: ${colors.white};
`;

export default HeaderHome;
