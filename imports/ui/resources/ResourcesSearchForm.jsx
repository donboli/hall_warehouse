import { Session } from 'meteor/session';
import React, { Component } from 'react';
import Constants from '../../lib/constants.js';

export default class ResourcesSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: Session.get("searchValue") || ""};
  }

  setSearchValue(event) {
    event.preventDefault();
    let text = this.refs.searchField.value;
    this.setState({searchValue: text});
    Session.set("searchValue", text);
  }

  componentDidMount() {
    this.refs.searchField.focus();
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
              ref="searchField"
              value={this.state.searchValue}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-9">
            <select id="category" defaultValue="placeholder" >
              <option value="placeholder" disabled>Categorías</option>
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