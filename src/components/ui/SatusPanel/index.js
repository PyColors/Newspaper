import styled, { css } from 'styled-components';
import { generator } from 'uigradients';
import theme from '../../../styles/theme';

const { colors, fontSize } = theme;

const SatusPanel = styled.section`
  margin: 1em;
  padding: 1.5em 2em;
  border: 2px solid ${colors.white};
  border-radius: 3px;
  font-size: ${fontSize.large};
  color: ${colors.white};

  ${props =>
    props.success &&
    css`
        ${generator({ gradient: 'ali', type: 'radial' })} 
    `};

  ${props =>
    props.danger &&
    css`
		${generator({ gradient: 'cherry', type: 'radial' })} 
    `};

  ${props =>
    props.warning &&
    css`
		${generator({
      gradient: 'electric_violet',
      type: 'radial',
      options: {
        position: '45px 20px',
        shape: 'ellipse',
        colorStops: ['20%', '50%'],
        extent: 'farthest-corner'
      }
    })}
    `};

  ${props =>
    props.info &&
    css`
		${generator({ gradient: 'day_tripper', type: 'radial' })} 
    `};
`;

export default SatusPanel;
