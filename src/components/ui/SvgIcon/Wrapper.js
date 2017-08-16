import styled from 'styled-components';
import theme from '../../../styles/theme';

const { fontSize, colors } = theme;

const Wrapper = styled.svg`
  font-size: ${fontSize.xlarge};
  color: ${colors.white};
  width: ${fontSize.xlarge};
  height: ${fontSize.xlarge};
`;

export default Wrapper;
