import React, { Component } from 'react';
import EventsSearchForm from './EventsSearchForm.jsx';
import EventsList from './EventsList.jsx';

export default class Events extends Component {
  getEvents() {
    return [
      { _id: 1, hall: 'Segatori', date: new Date(), type: 1 },
      { _id: 2, hall: 'Ródano', date: new Date(), type: 2 },
      { _id: 3, hall: 'Ettén', date: new Date(), type: 3 },
      { _id: 4, hall: 'Írises', date: new Date(), type: 4 },
      { _id: 5, hall: 'Quinta', date: new Date(), type: 5 },
      { _id: 6, hall: 'Foráneo', date: new Date(), type: 6 }
    ];
  }

  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return (
      <div>
        <div className="row columns">
          <h1>Eventos</h1>
        </div>
        <EventsSearchForm />
        <hr/>
        <EventsList events={this.getEvents()} />
      </div>
    );
  }
}