import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleEnableSubmit = this.handleEnableSubmit.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  handleChangeEmail(e) {
    e.preventDefault();
    this.setState({ email: e.target.value }, this.handleEnableSubmit);
  };

  handleChangePassword(e) {
    e.preventDefault();
    this.setState({ password: e.target.value }, this.handleEnableSubmit);
  };

  handleEnableSubmit() {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <React.Fragment>
        <div className={css(loginStyles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              className={loginStyles.inputs}
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              className={loginStyles.inputs}
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input type="submit" value="OK" disabled={this.state.enableSubmit ? false : true} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Login.propsTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  inputs: {
    margin: "0 16px 0 8px",
  },
});

export default Login;