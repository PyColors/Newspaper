import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const { fontSize, colors } = theme;

const Label = styled.label`
  color: ${props => props.color || `${colors.primaryTwo}`};
  outline: none;
  font-size: ${fontSize.large};
  padding: 8px 10px;
`;

const TitleLabel = styled.span`
  font-size: ${fontSize.large};
  color: ${props => props.color || `${colors.primaryTwo}`};
`;

class LabelComponent extends Component {
  render() {
    const { title, htmlFor } = this.props;

    return (
      <Label htmlFor={htmlFor}>
        <TitleLabel>
          {title}
        </TitleLabel>
      </Label>
    );
  }
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  htmlFor: PropTypes.string
};

Label.defaultProps = {
  htmlFor: ''
};
export default LabelComponent;
