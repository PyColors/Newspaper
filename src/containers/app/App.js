import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataIfNeeded } from '../../actions/sportAction';
import styled from 'styled-components';
import H1 from '../../components/ui/H1';
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

    const Content = styled.div`
      display: inline-block;
      vertical-align: top;
      width: 18%;
      border: solid 1px #ddd;
      padding: 10px;
      margin: 0 0.25%;
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
        <br />
        <div>
          <div>
            {error ? (
              <p>
                Sorry, we had a problem changing your data. Please try again
                later.
              </p>
            ) : null}
          </div>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data.map((item, index) => {
              return (
                <Content>
                  <div key={index}>
                    <p> {item.source.name} </p>
                    <p> {item.description} </p>
                    <a href={item.url}>{item.title}</a>
                    <img src={item.urlToImage} width="75%" alt="" />
                    <p> {item.publishedAt} </p>
                  </div>
                </Content>
              );
            })
          )}
        </div>
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
