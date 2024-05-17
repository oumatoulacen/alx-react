import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    width: '100%',
    borderTop: "1px solid #E11D3F",
    padding: '10px 0',
    position: 'absolute',
    bottom: 0,
  }
});

function Footer({ user }) {
  return (
    <div className={css(styles.footer)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user?.email && <a href="#">Contact us</a>}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: {},
};

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

export { Footer as StatelessFooter };
export default connect(mapStateToProps)(Footer);
