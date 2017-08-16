import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const SvgIcon = props => {
  return (
    <Wrapper viewBox="0 0 1024 1024">
      <g fill={props.color}>
        <path d={props.icon} />
      </g>
    </Wrapper>
  );
};

SvgIcon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default SvgIcon;
