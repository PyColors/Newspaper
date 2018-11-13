import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  padding: 15px;
`;

class FormComponent extends Component {
  render() {
    const { id, onSubmit, action, method } = this.props;

    return <Form id={id} onSubmit={onSubmit} action={action} method={method} />;
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  action: PropTypes.string,
  method: PropTypes.string
};

Form.defaultProps = {
  id: '',
  action: '',
  method: ''
};
export default FormComponent;
