import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const SvgIcon = props => {
  return (
    <Wrapper viewBox="0 0 438.549 438.549">
      <g fill={props.color}>
        <path d={props.icon} />
      </g>
    </Wrapper>
  );
};

SvgIcon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string
};

SvgIcon.defaultProps = {
  color: '',
  icon: ''
};

export default SvgIcon;
