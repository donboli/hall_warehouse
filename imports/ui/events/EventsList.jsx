import React, { Component } from 'react';
import Event from './Event.jsx';

export default class EventsList extends Component {
  render() {
    var result;
    if(this.props.events == undefined || this.props.events.length == 0){
      result = <div>No hay eventos para estas fechas</div>;
    } else {
      result = <ul className="accordion" data-accordion data-allow-all-closed="true">
        { this.props.events.map((event) => (
          <Event event={event} key={event._id}/>
        ))}
      </ul>;
    }
    return (
      <div className="row columns">
        {result}
      </div>
    );
  }
}