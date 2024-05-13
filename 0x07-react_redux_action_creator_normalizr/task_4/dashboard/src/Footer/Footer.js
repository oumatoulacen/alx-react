import React from "react";
import { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";
import { css, StyleSheet } from 'aphrodite';

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <div className={css(styles.footer)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && <a href="#">Contact us</a>}
    </div>
  );
}


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

export default Footer;
