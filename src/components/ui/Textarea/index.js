import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const { fontSize, colors } = theme;

const Textarea = styled.textarea`
  color: ${props => props.color || `${colors.primaryTwo}`};
  outline: none;
  font-size: ${fontSize.large};
  border: solid 1px ${colors.primaryOne};
  padding: 8px 10px;
`;

class TextareaComponent extends Component {
  render() {
    const { placeholder, name, rows, cols, maxlength, required } = this.props;

    return (
      <Textarea
        placeholder={placeholder}
        name={name}
        rows={rows}
        cols={cols}
        maxlength={maxlength}
        required={required}
      />
    );
  }
}

Textarea.propTypes = {
  placeholde: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  maxlength: PropTypes.string,
  required: PropTypes.string.isRequired
};

Textarea.defaultProps = {
  placeholder: '',
  rows: '',
  cols: '',
  maxlength: '200'
};
export default TextareaComponent;
