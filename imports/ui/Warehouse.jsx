import React, { Component } from 'react';
import ResourceSearchForm from './ResourceSearchForm.jsx';
import ResourceList from './ResourceList.jsx';

export default class Warehouse extends Component {
  getResources() {
    return [
      { _id: 1, description: 'Tenedores de plata', quantity: 13, category: 1 },
      { _id: 2, description: 'Tenedores de bronce', quantity: 13, category: 1 },
      { _id: 3, description: 'Servilletas de seda', quantity: 56, category: 2 },
      { _id: 4, description: 'Servilletas de papel', quantity: 60, category: 2 },
      { _id: 5, description: 'Manteles azules', quantity: 82, category: 3 },
      { _id: 6, description: 'Manteles rojos', quantity: 120, category: 3 }
    ];
  }

  componentDidMount() {
    $(this.refs.warehouse).foundation();
  }
  
  render() {
    return (
      <div ref="warehouse">
        <div className="row columns">
          <h1>Almacén</h1>
        </div>
        <ResourceSearchForm />
        <hr/>
        <ResourceList resources={this.getResources()} />
      </div>
    );
  }
}