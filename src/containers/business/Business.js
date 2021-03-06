import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDataIfNeeded } from '../../actions/scienceAction';
import {
  Hr,
  Content,
  Global,
  AppWapper,
  LogoNewspaper,
  LogoNewspaperLink
} from '../../helpers/styles';
import H1 from '../../components/ui/H1';
import H2 from '../../components/ui/H2';
import Img from '../../components/ui/Img';
import Header from '../../components/ui/Header';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom';
import { COLOR_ICONS, ICONS } from '../../utils/constants';
import SvgIcon from '../../components/ui/SvgIcon';

class Business extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDataIfNeeded());
  }

  render() {
    const { data, isLoading, error } = this.props;

    return (
      <AppWapper>
        <Header business>
          <LogoNewspaperLink href="/">
            <LogoNewspaper size="54" title="Logo" />
          </LogoNewspaperLink>
          <H1>
            <FormattedMessage {...messages.titleMessage} />
          </H1>
          <Link to="/sport">Sport</Link> - <Link to="/science">Science</Link>
        </Header>

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
                    <React.Fragment>
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
                      <a href={item.url}>
                        Lire{' '}
                        <SvgIcon
                          icon={ICONS.ARROW_RIGHT}
                          color={COLOR_ICONS.BLACK}
                        />
                      </a>
                      <Hr />
                    </React.Fragment>
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
