import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Constants from '../../lib/constants.js';

export default class EventForm extends Component {
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
      <form>
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
                <select id="hall">
                  <option value="Segatori">Segatori</option>
                  <option value="Ródano">Ródano</option>
                  <option value="Ettén">Ettén</option>
                  <option value="Írises">Írises</option>
                  <option value="Quinta">Quinta</option>
                  <option value="Foráneo">Foráneo</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="small-2 columns">
                <label for="datepicker" className="text-right middle">Fecha:</label>
              </div>
              <div className="small-10 columns">
                <DatePicker id="datepicker" selected={this.state.startDate} onChange={this.handleChange.bind(this)} />
              </div>
            </div>
            <div className="row">
              <div className="small-2 columns">
                <label for="type" className="text-right middle">Tipo:</label>
              </div>
              <div className="small-10 columns">
                <select id="type" defaultValue="placeholder">
                  <option value="placeholder" disabled>Tipos</option>
                  {Object.keys(Constants.event_types).map((value, index) => (
                    <option value={value} key={index}>{Constants.event_types[value]}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row columns">
              <input type="submit" 
                     className="button" 
                     value="Agregar">
              </input>
            </div>
          </div>
        </div>
      </form>
    );
  }
}