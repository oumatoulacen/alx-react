import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';

// Define common styles with Aphrodite
const HOLBERTON_RED = '#e1484c';

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottom: `3px solid ${HOLBERTON_RED}`,
    marginTop: '30px',
  },
  appHeaderImage: {
    width: '150px',
  },
  appHeaderH1: {
    margin: 'auto auto auto 0',
    color: HOLBERTON_RED,
  },
});

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img className={css(styles.appHeaderImage)} src={logo} alt="Holberton Logo" />
      <h1 className={css(styles.appHeaderH1)}>School Dashboard</h1>
    </div>
  );
}

export default Header;
