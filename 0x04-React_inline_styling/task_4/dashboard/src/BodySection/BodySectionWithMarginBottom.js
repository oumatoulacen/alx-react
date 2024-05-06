import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection {...this.props} />
        </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ])
  };

BodySectionWithMarginBottom.defaultProps = {
    children: <React.Fragment />,
    title: ''
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
});

export default BodySectionWithMarginBottom;