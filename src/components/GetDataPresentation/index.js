import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
class GetDataPresentation extends Component {
  render() {
    const {
      title,
      author,
      description,
      url,
      urlToImage,
      publishedAt
    } = this.props;

    const H1 = styled.div`
      display: inline-block;
      vertical-align: top;
      width: 18%;
      border: solid 1px #ddd;
      padding: 10px;
      margin: 0 0.25%;
    `;

    return (
      <H1>
        <img src={urlToImage} width="75%" alt="" />
        <a href={url}>{title}</a>
        {author}
        {description}

        {publishedAt}
      </H1>
    );
  }
}

GetDataPresentation.propTypes = {
  author: PropTypes.string.isRequired
  /*  title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.bool.isRequired,
    publishedAt: PropTypes.string.isRequired*/
};

export default GetDataPresentation;
