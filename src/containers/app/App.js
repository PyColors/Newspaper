import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataIfNeeded } from '../../actions/sportAction';
import styled from 'styled-components';
import H1 from '../../components/ui/H1';
import H2 from '../../components/ui/H2';
import Img from '../../components/ui/Img';
import HeaderHome from '../../components/ui/HeaderHome';
import Button from '../../components/ui/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppWapper = styled.div`
  text-align: center;
`;

class App extends Component {
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
      width: 45%;
      padding: 0;
    `;

    const Fisrt = styled.div`
      display: block;
      width: 100%;
      border: red 1px solid;
    `;

    return (
      <AppWapper>
        <HeaderHome>
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>

          <Button primaryTwo>
            <FormattedMessage {...messages.sports} />{' '}
          </Button>
          <Button primaryTwo>
            <FormattedMessage {...messages.travel} />{' '}
          </Button>
          <Button secondaryOne>
            <FormattedMessage {...messages.science} />{' '}
          </Button>
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
                  <Content>
                    {index === 0 ? (
                      <Fisrt>
                        <H1 color="#000"> {item.title} </H1>
                        <H2> Source : {item.source.name} </H2>
                        <Img
                          src={item.urlToImage}
                          alt={item.source.name}
                          width="75%"
                        />
                        <p> {item.description} </p>
                        <a href={item.url}>Lire</a>
                        <p> {item.publishedAt} </p>
                      </Fisrt>
                    ) : (
                      <div key={index}>
                        <H1 color="#000"> {item.title} </H1>
                        <H2> Source : {item.source.name} </H2>
                        <Img
                          src={item.urlToImage}
                          alt={item.source.name}
                          width="75%"
                        />
                        <p> {item.description} </p>
                        <a href={item.url}>Lire</a>
                        <p> {item.publishedAt} </p>
                      </div>
                    )}
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

App.propTypes = {
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

export default connect(mapStateToProps)(App);
