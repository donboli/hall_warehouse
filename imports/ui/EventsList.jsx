import React, { Component } from 'react';
import Event from './Event.jsx';

export default class EventsList extends Component {
  getEvents() {
    return [
      { _id: 1, hall: 'Segatori', date: new Date(), type: 1 },
      { _id: 2, hall: 'Ródano', date: new Date(), type: 2 },
      { _id: 3, hall: 'Ettén', date: new Date(), type: 3 },
      { _id: 4, hall: 'Írises', date: new Date(), type: 4 },
      { _id: 5, hall: 'Quinta', date: new Date(), type: 5 },
      { _id: 6, hall: 'Foráneo', date: new Date(), type: 6 },
    ];
  }
  
  render() {
    return (
      <ul className="accordion" data-accordion data-allow-all-closed="true">
        { this.getEvents().map((event) => (
          <Event event={event} key={event._id}/>
        ))}
      </ul>
    );
  }
}