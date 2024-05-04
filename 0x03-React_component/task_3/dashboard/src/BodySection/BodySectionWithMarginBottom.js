import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
        <div className="bodySectionWithMargin">
            <BodySection {...this.props} />
                <p>Some news</p>
            <BodySection />
        </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
};

BodySectionWithMarginBottom.defaultProps = {
    title: ''
};

export default BodySectionWithMarginBottom;