import React, { Component, PropTypes } from 'react';
import ResourceSearchForm from './ResourceSearchForm.jsx';
import ResourceList from './ResourceList.jsx';

export default class Warehouse extends Component {
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
        <ResourceList resources={this.props.resources} />
      </div>
    );
  }
}

Warehouse.propTypes = {
  resources: PropTypes.array.isRequired,
};