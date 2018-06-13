import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  min-height: 250px;
`;

const Img = props => {
  return (
    <Figure>
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        width={props.width}
        height={props.height}
      />
    </Figure>
  );
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Img;
