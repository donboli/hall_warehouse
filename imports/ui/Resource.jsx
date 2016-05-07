import React, { Component } from 'react';
import Constants from '../lib/constants.js';

export default class Event extends Component {
  render() {
    return (
      <li className="accordion-item" data-accordion-item>
        <a href="#" className="accordion-title">{this.props.resource.description}: {this.props.resource.quantity}</a>
        <div className="accordion-content" data-tab-content>
          Categoría: {Constants.resource_categories[this.props.resource.category]}
        </div>
      </li>
    );
  }
}