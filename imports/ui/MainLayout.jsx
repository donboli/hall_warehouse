import React, { Component } from 'react';

export default class MainLayout extends Component {
  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="top-bar" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle>Menu</button>
        </div>
        <div className="top-bar" id="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown vertical medium-horizontal menu">
              <li><a href="/warehouse">Almacén</a></li>
              <li><a href="/events">Eventos</a></li>
              <li><a href="/users">Usuarios</a></li>
            </ul>
          </div>
        </div>
        <br />
        <main>{this.props.content}</main>
      </div>
    );
  }
}