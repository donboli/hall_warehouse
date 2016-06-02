import { Session } from 'meteor/session';
import React, { Component } from 'react';
import Constants from '../../lib/constants.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export default class ResourcesSearchForm extends Component {
  constructor(props) {
    super(props);

    let searchValues = Session.get("searchValues");
    if(searchValues == undefined) {
      searchValues = {
        description: "",
        category: "placeholder",
        date: moment(),
        dateFilter: false
      };
    } else {
      searchValues = {
        description: searchValues.description,
        category: searchValues.category,
        date: moment(searchValues.date, 'L'),
        dateFilter: searchValues.dateFilter
      };
    }

    this.state = searchValues;
  }

  handleDescriptionChange(event) {
    event.preventDefault();

    this.setState({
      description: event.target.value
    }, this.setSearchValues.bind(this));
  }

  handleCategoryChange(event) {
    event.preventDefault();

    this.setState({
      category: event.target.value
    }, this.setSearchValues.bind(this));
  }

  handleDateChange(date) {
    this.setState({
      date: date
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
    let description = this.state.description;
    let category = this.state.category;
    let date = this.state.date;
    let dateFilter = this.state.dateFilter;
    
    Session.set("searchValues", {
      description: description,
      category: category,
      date: date.format('L'),
      dateFilter: dateFilter
    });
  }

  componentDidMount() {
    this.refs.description.focus();
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="small-2 columns">
            <label for="middle-label" className="text-right middle">Buscar:</label>
          </div>
          <div className="small-10 columns">
            <input onChange={this.handleDescriptionChange.bind(this)}
              type="text" 
              id="middle-label" 
              placeholder="Buscar Recurso"
              ref="description"
              value={this.state.description}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-2">
            <label for="yes-no" className="text-right middle">Fecha:</label>
          </div>
          <div className="columns small-6">
            <DatePicker id="datepicker" selected={this.state.date} onChange={this.handleDateChange.bind(this)}/>
          </div>
          <div className="columns small-4">
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
          <div className="columns small-9">
            <select onChange={this.handleCategoryChange.bind(this)}
              id="category" 
              ref="category"
              value={this.state.category}>
              <option value="placeholder">Categorías</option>
              {Object.keys(Constants.resource_categories).map((value, index) => (
                <option key={index} value={value}>{Constants.resource_categories[value]}</option>
              ))}
            </select>
          </div>
          <div className="columns small-3 align-right">
            <a className="button float-right" href="/warehouse/resource">+</a>
          </div>
        </div>
      </form>
    );
  }
}