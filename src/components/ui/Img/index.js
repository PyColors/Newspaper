import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const Img = props => {
  return (
    <Wrapper>
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        width={props.width}
        height={props.height}
      />
    </Wrapper>
  );
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Img;
