import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fontSize } = theme;

const H1 = styled.h1`
  font-size: ${fontSize.xlarge};
  color: ${props => props.color || `${colors.primaryTwo}`};
`;

export default H1;
