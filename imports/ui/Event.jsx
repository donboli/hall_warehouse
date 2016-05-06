import React, { Component } from 'react';
import Constants from '../lib/constants.js';

export default class Event extends Component {
  render() {
    return (
      <li className="accordion-item" data-accordion-item>
        <a href="#" className="accordion-title">{this.props.event.hall}</a>
        <div className="accordion-content" data-tab-content>
          Fecha: {this.props.event.date.toDateString()}
          <br/>
          Tipo: {Constants[this.props.event.type]}
        </div>
      </li>
    );
  }
}