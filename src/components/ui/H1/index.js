import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fontSize } = theme;

const H1 = styled.h1`
  font-size: ${fontSize.xxlarge};
  color: ${props => props.color || `${colors.white}`};
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export default H1;
