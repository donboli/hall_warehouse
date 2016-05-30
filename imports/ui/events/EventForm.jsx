import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Constants from '../../lib/constants.js';
import Events from '../../api/events.js';

export default class EventForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      date: moment(),
      hall: "placeholder",
      type: "placeholder"
    };
  }

  handleDateChange(date) {
    this.setState({
      date: date
    });
  }

  handleHallChange(hall) {
    this.setState({
      hall: this.refs.hall.value
    });
  }

  handleTypeChange(type) {
    this.setState({
      type: this.refs.type.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
 
    // get field contents
    let hall = this.state.hall;
    let date = this.state.date;
    let type = this.state.type;
 
    // insert new resource
    try{
      Events.insert({
        hall: parseInt(hall),
        date: date.toString(),
        type: parseInt(type),
        createdAt: new Date(),
      });
    }
    catch(err) {
      console.log(err.message);
    }
 
    // clear form
    this.setState({hall: "placeholder"});
    this.setState({date: moment()});
    this.setState({type: "placeholder"});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="row columns">
          <h2>Evento Nuevo</h2>
        </div>
        <div className="row columns">
          <div className="callout">
            <div className="row">
              <div className="small-2 columns">
                <label for="hall" className="text-right middle">Salón:</label>
              </div>
              <div className="small-10 columns">
                <select 
                  ref="hall"
                  value={this.state.hall}
                  onChange={this.handleHallChange.bind(this)}>
                  <option value="placeholder" disabled>Seleccione un salón</option>
                  {Object.keys(Constants.halls).map((value, index) => (
                    <option value={value} key={index}>{Constants.halls[value]}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="small-2 columns">
                <label for="datepicker" className="text-right middle">Fecha:</label>
              </div>
              <div className="small-10 columns">
                <DatePicker 
                  id="datepicker"
                  selected={this.state.date} 
                  onChange={this.handleDateChange.bind(this)} 
                />
              </div>
            </div>
            <div className="row">
              <div className="small-2 columns">
                <label for="type" className="text-right middle">Tipo:</label>
              </div>
              <div className="small-10 columns">
                <select 
                  ref="type"
                  value={this.state.type}
                  onChange={this.handleTypeChange.bind(this)}>
                  <option value="placeholder" disabled>Seleccione un tipo</option>
                  {Object.keys(Constants.event_types).map((value, index) => (
                    <option 
                      value={value} 
                      key={index}>
                      {Constants.event_types[value]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="columns small-6">
                <a className="button" href="javascript:history.back()">
                  Volver
                </a>
              </div>
              <div className="columns small-6">
                <input type="submit" 
                       className="button success float-right"
                       value="Agregar">
                </input>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}