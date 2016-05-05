import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default EventsSearch = React.createClass({
  getInitialState: function() {
    return {
      startDate: moment()
    };
  },
 
  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render() {
    return (
      <div className="row">
        <div className="small-2 columns">
          <label for="datepicker" className="text-right middle">Fecha:</label>
        </div>
        <div className="small-10 columns">
          <DatePicker id="datepicker" selected={this.state.startDate} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
});