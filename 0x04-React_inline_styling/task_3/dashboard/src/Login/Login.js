import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define common styles and variables
const HOLBERTON_RED = '#e1484c';

const styles = StyleSheet.create({
  appBody: {
    padding: '36px 24px', // Apply padding to the body
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  input: {
    margin: '0 16px 0 8px', // Margin applied to the inputs
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input className={css(styles.input)} type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input className={css(styles.input)} type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
