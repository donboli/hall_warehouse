import React, { Component } from 'react';

export default class Users extends Component {
  componentDidMount() {
    $(this.refs.users).foundation();
  }
  
  render() {
    return (
      <div ref="users">
        <div className="row columns">
          <h1>Usuarios</h1>
        </div>
      </div>
    );
  }
}