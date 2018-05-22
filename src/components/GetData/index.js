import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetDataPresentation from '../../components/GetDataPresentation';

// import config from '../../config';

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    this.setState({
      //    isLoading: true
    });

    // const key = config.KEY;

    return fetch(
      'https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=e520c03696494f1b81d5d6d5dca26085'
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          articles: json.articles
          //    isLoading: false,
        });
      })
      .catch(error => {
        // Error!!!
        this.setState({
          //    isLoading: false
        });
      });
  };

  render() {
    const { articles } = this.state;

    return (
      <section>
        {articles.length > 0
          ? articles.map(function(article, i) {
              return (
                <GetDataPresentation
                  key={i}
                  title={article.title}
                  author={article.author}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  publishedAt={article.publishedAt}
                />
              );
            })
          : null}
      </section>
    );
  }
}

GetData.propTypes = {
  articles: PropTypes.array.isRequired
  /*
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.bool.isRequired,
    publishedAt: PropTypes.string.isRequired,*/
};

export default GetData;
