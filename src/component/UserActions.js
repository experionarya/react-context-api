import React, { Component } from "react";
import { Context } from "../config/config";
import { Redirect } from "react-router";
export default class UserAction extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
          {(data) => (
            <div>
              <button onClick={data.logout}>Log out</button>
              {/* <button onClick={data.delete}>Delete Account</button> */}
              {!data.isLoggedIn && <Redirect to="/" />}
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}
