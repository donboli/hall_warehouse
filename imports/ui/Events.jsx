import React from 'react';
import EventsSearch from './EventsSearch.jsx';
import EventsList from './EventsList.jsx';

export default Events = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <h1>Eventos</h1>
        </div>
        <EventsSearch />
        <hr/>
        <EventsList />
      </div>
    );
  }
});