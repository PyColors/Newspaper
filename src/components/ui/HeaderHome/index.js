import { generator } from 'uigradients';
import styled from 'styled-components';

const HeaderHome = styled.header`
  ${generator({ gradient: 'electric_violet', type: 'radial' })} height: 180px;
  padding: 20px;
  color: white;
`;

export default HeaderHome;
