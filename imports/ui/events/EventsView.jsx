import React, { Component, PropTypes } from 'react';
import EventsSearchForm from './EventsSearchForm.jsx';
import EventsList from './EventsList.jsx';

export default class EventsView extends Component {
  componentDidMount() {
    $(this.refs.events).foundation();
  }

  render() {
    return (
      <div ref="events">
        <div className="row columns">
          <h1>Eventos</h1>
        </div>
        <EventsSearchForm />
        <hr/>
        <EventsList events={this.props.events} />
      </div>
    );
  }
}

EventsView.propTypes = {
  events: PropTypes.array.isRequired,
};