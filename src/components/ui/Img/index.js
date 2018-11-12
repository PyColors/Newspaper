import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  min-height: 250px;
`;

const Image = styled.img`
  border: solid 1px #dce6f0;
  padding: 0.4rem;
  border-radius: 0.3rem;
  background-color: #f3f6fa;
`;

const Img = props => {
  return (
    <Figure>
      <Image
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
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Img;
