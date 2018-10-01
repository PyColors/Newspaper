import styled from 'styled-components';
import theme from '../../../styles/theme';

const { fontSize, colors } = theme;

const H2 = styled.h2`
  font-size: ${fontSize.large};
  color: ${colors.secondaryTwo};
`;

export default H2;
