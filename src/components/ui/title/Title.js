import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Translate from 'react-translate-component';

/**
 * Used to display an icon and translated title
 */

class Title extends Component {
  render() {
    const { icon, content } = this.props;

    return (
      <h2 className="title branding__title-text-colour">
        <span className={`fa fa-${icon} title__icon`} aria-hidden="true" />
        <Translate content={content} />
      </h2>
    );
  }
}

Title.propTypes = {
  /** Which font awesome icon you want to display */
  icon: PropTypes.string.isRequired,
  /** The name of the translation you want as the title */
  content: PropTypes.string.isRequired,
};

export default Title;
