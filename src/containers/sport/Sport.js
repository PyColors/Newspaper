import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchDataIfNeeded } from '../../actions/sportAction';
import styled from 'styled-components';
import { Hr, Content, Article, Global } from '../../helpers/styles';
import H1 from '../../components/ui/H1';
import H2 from '../../components/ui/H2';
import Img from '../../components/ui/Img';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/ui/HeaderHome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppWapper = styled.div`
  text-align: center;
`;

class Sport extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDataIfNeeded());
  }

  render() {
    const { data, isLoading, error } = this.props;

    return (
      <AppWapper>
        <HeaderHome sport>
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
          <Link to="/science">Science</Link> -{' '}
          <Link to="/business">Business</Link>
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
          <Footer />
        </Global>
      </AppWapper>
    );
  }
}

Sport.propTypes = {
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

export default connect(mapStateToProps)(Sport);
