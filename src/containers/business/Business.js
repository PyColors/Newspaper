import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataIfNeeded } from '../../actions/scienceAction';
import styled from 'styled-components';
import H1 from '../../components/ui/H1';
import H2 from '../../components/ui/H2';
import Img from '../../components/ui/Img';
import HeaderHome from '../../components/ui/HeaderHome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom';

const AppWapper = styled.div`
  text-align: center;
`;

class Business extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDataIfNeeded());
  }

  render() {
    const { data, isLoading, error } = this.props;

    const Global = styled.div`
      width: 75%;
      margin: 0 auto;
    `;

    const Content = styled.div`
      display: inline-block;
      vertical-align: top;
      width: 75%;
      padding: 0;
    `;

    const Article = styled.article`
      max-width: 64rem;
      padding: 1rem 3rem;
      margin: 0 auto;
      font-size: 1.1rem;
    `;

    const Hr = styled.hr`
      height: 1px;
      padding: 0;
      margin: 1rem 0;
      background-color: #dcdbdb;
      border: 0;
    `;

    return (
      <AppWapper>
        <HeaderHome science>
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
          <Link to="/sport">Sport</Link> - <Link to="/science">Science</Link>
        </HeaderHome>

        <Global>
          <div>
            {error ? (
              <p>
                Sorry, we had a problem changing your data. Please try again
                later.
              </p>
            ) : null}

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data.map((item, index) => {
                return (
                  <Content key={index}>
                    <Article>
                      <H2 color="#000"> {item.title} </H2>
                      <span> Source : {item.source.name} </span>
                      <Img
                        src={
                          item.urlToImage === null
                            ? 'https://placeimg.com/640/420/any'
                            : item.urlToImage
                        }
                        alt={item.source.name}
                        width="100%"
                      />
                      <p> {item.description} </p>
                      <a href={item.url}>Lire ⌲</a>
                      <Hr />
                    </Article>
                  </Content>
                );
              })
            )}
          </div>
        </Global>
      </AppWapper>
    );
  }
}

Business.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { data, isLoading, error } = state.sportReducer;

  return {
    data: data,
    error: error,
    isLoading: isLoading
  };
}

export default connect(mapStateToProps)(Business);
