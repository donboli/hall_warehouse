import React, { Component } from 'react';

export default class Users extends Component {
  componentDidMount() {
    $(document).foundation();
  }
  
  render() {
    return (
      <div>
        <div className="row columns">
          <h1>Usuarios</h1>
        </div>
      </div>
    );
  }
}