import React, { Component } from 'react';
import Event from './Event.jsx';

export default class EventsList extends Component {
  render() {
    return (
      <ul className="accordion" data-accordion data-allow-all-closed="true">
        { this.props.events.map((event) => (
          <Event event={event} key={event._id}/>
        ))}
      </ul>
    );
  }
}