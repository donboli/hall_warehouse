import React, { Component } from 'react';
import Resource from './Resource.jsx';

export default class ResourceList extends Component {
  render() {
    return (
      <ul className="accordion" data-accordion data-allow-all-closed="true">
        { this.props.resources.map((resource) => (
          <Resource resource={resource} key={resource._id} />
        ))}
      </ul>
    );
  }
}