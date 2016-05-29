import { Session } from 'meteor/session';
import React, { Component } from 'react';
import Constants from '../../lib/constants.js';

export default class ResourcesSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionSearchValue: Session.get("descriptionSearchValue") || "",
      categorySearchValue: Session.get("categorySearchValue") || "placeholder"
    };
  }

  setSearchValue(event) {
    event.preventDefault();
    
    let description = this.refs.descriptionField.value;
    let category = this.refs.categoryField.value;
    
    this.setState({descriptionSearchValue: description});
    this.setState({categorySearchValue: category});

    Session.set("descriptionSearchValue", description);
    Session.set("categorySearchValue", category);
  }

  componentDidMount() {
    this.refs.descriptionField.focus();
  }

  render() {
    return (
      <form onSubmit={this.setSearchValue.bind(this)}>
        <div className="row">
          <div className="small-2 columns">
            <label for="middle-label" className="text-right middle">Buscar:</label>
          </div>
          <div className="small-10 columns">
            <input onChange={this.setSearchValue.bind(this)}
              type="text" 
              id="middle-label" 
              placeholder="Buscar Recurso"
              ref="descriptionField"
              value={this.state.descriptionSearchValue}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-9">
            <select onChange={this.setSearchValue.bind(this)}
              id="category" 
              ref="categoryField"
              value={this.state.categorySearchValue}>
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