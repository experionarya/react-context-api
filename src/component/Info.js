import React, { Component } from "react";
import { Context } from "../config/config";
import UserActions from "./UserActions";
export default class Info extends Component {
  render() {
    return (
      <div className="tc">
        <div>
          <Context.Consumer>
            {(data) => (
              <div>
                <h1>User Info </h1>
                <h5>Email : {data.userInfo.email && data.userInfo.email}</h5>
                <h5>
                  Password : {data.userInfo.password && data.userInfo.password}
                </h5>
              </div>
            )}
          </Context.Consumer>
          <UserActions />
        </div>
      </div>
    );
  }
}
