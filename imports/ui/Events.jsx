import React, { Component } from 'react';
import EventsSearch from './EventsSearch.jsx';
import EventsList from './EventsList.jsx';

export default class Events extends Component {
  componentDidMount() {
    $(document).foundation();
  }
  
  render() {
    return (
      <div>
        <div className="row columns">
          <h1>Eventos</h1>
        </div>
        <EventsSearch />
        <hr/>
        <EventsList />
      </div>
    );
  }
}