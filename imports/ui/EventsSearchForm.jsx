import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class EventsSearchForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      startDate: moment()
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="row">
        <div className="small-2 columns">
          <label for="datepicker" className="text-right middle">Fecha:</label>
        </div>
        <div className="small-8 columns">
          <DatePicker id="datepicker" selected={this.state.startDate} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="small-2 columns align-right">
          <a className="button float-right" href="/events/event">+</a>
        </div>
      </div>
    );
  }
}