import React, { Component } from 'react';
import ResourceSearchForm from './ResourceSearchForm.jsx';
import ResourceList from './ResourceList.jsx';

export default class Warehouse extends Component {
  render() {
    return (
      <div>
        <div className="row columns">
          <h1>Almacén</h1>
        </div>
        <ResourceSearchForm />
        <hr/>
        <ResourceList />
      </div>
    );
  }
}