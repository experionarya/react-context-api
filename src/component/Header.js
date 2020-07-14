import React, { Component } from "react";
import { Context } from "../config/config";
import { Redirect } from "react-router";
export default class Header extends Component {
  state = {
    email: "",
    password: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Context.Consumer>
          {(data) => (
            <div>
              {console.log("dataaaaaaaaaaa", data)}
              <main className="pa4 black-80">
                <div className="measure center">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Log In</legend>
                    <div className="mt3">
                      <label
                        className="db fw6 lh-copy f6"
                        htmlFor="email-address"
                      >
                        Email
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email"
                        id="email-address"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.onChange}
                        value={this.state.password}
                      />
                    </div>
                  </fieldset>
                  <div className="">
                    <button
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      onClick={() => {
                        data.logIn(this.state);
                      }}
                    >
                      Log in
                    </button>
                  </div>
                  {data.isLoggedIn && <Redirect to="/info" />}
                </div>
              </main>
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}
