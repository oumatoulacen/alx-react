import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define common styles and variables
const HOLBERTON_RED = '#e1484c';

const styles = StyleSheet.create({
  appBody: {
    padding: '36px 24px', 
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  label: {
    margin: '0 8px 0 0',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  input: {
    margin: '0 16px 0 8px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    ':focus': {
      outline: 'none',
      borderColor: HOLBERTON_RED
    },
    '@media (max-width: 900px)': {
      margin: '8px 0'
    }
  },
  button: {
    backgroundColor: HOLBERTON_RED,
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ff7f7f'
    }
  }
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" className={css(styles.label)}>Email: </label>
        <input className={css(styles.input)} type="email" id="email" name="email" />
        <label htmlFor="password" className={css(styles.label)}>Password: </label>
        <input className={css(styles.input)} type="password" id="password" name="password" />
        <button className={css(styles.button)}>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
