import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const { fontSize, colors } = theme;

const Input = styled.input`
  color: ${props => props.color || `${colors.primaryTwo}`};
  outline: none;
  font-size: ${fontSize.large};
  border: solid 1px ${colors.primaryOne};
  padding: 8px 10px;
`;

class InputComponent extends Component {
  render() {
    const {
      type,
      value,
      onChange,
      id,
      disabled,
      maxLength,
      required,
      placeholder
    } = this.props;

    return (
      <Input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
        maxLength={maxLength}
        required={required}
        placeholder={placeholder}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  disabled: false,
  maxLength: 524288,
  required: false,
  placeholder: '',
  type: 'text'
};

export default InputComponent;
