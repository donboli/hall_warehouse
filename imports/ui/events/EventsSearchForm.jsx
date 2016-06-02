import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class EventsSearchForm extends Component {
  constructor(props, context) {
    super(props, context);

    let searchValues = Session.get("searchValues");
    if(searchValues == undefined) {
      searchValues = {
        startDate: moment(),
        endDate: moment(),
        dateFilter: false
      };
    } else {
      searchValues = {
        startDate: moment(searchValues.startDate, 'L'),
        endDate: moment(searchValues.endDate, 'L'),
        dateFilter: searchValues.dateFilter
      };
    }

    this.state = searchValues;
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    }, this.setSearchValues.bind(this));
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    }, this.setSearchValues.bind(this));
  }

  handleDateFilterChange() {
    this.setState({
      dateFilter: !this.state.dateFilter
    }, (function() {
      // set timeout to prevent breaking switch animation
      setTimeout(this.setSearchValues.bind(this), 250);
    }).bind(this));
  }

  setSearchValues() {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let dateFilter = this.state.dateFilter;

    Session.set("searchValues", {
      startDate: startDate.format('L'),
      endDate: endDate.format('L'),
      dateFilter: dateFilter
    });
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="small-2 columns">
            <label for="datepicker" className="text-right middle">Desde:</label>
          </div>
          <div className="small-6 columns">
            <DatePicker
              id="startDate"
              selected={this.state.startDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleStartDateChange.bind(this)}
            />
          </div>
          <div className="small-4 columns">
            <div className="switch large float-right">
              <input 
                className="switch-input" 
                id="yes-no" 
                type="checkbox" 
                name="exampleSwitch" 
                checked={this.state.dateFilter}
                readOnly="true"
              />
              <label className="switch-paddle" for="yes-no" onClick={this.handleDateFilterChange.bind(this)}>
                <span className="switch-active" aria-hidden="true">Si</span>
                <span className="switch-inactive" aria-hidden="true">No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-2 columns">
            <label for="datepicker" className="text-right middle">Hasta:</label>
          </div>
          <div className="small-8 columns">
            <DatePicker
              id="endDate"
              selected={this.state.endDate}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleEndDateChange.bind(this)}
            />
          </div>
          <div className="small-2 columns align-right">
            <a className="button float-right" href="/events/event">+</a>
          </div>
        </div>
      </form>
    );
  }
}