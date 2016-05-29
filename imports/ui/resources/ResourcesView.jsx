import React, { Component, PropTypes } from 'react';
import ResourcesSearchForm from './ResourcesSearchForm.jsx';
import ResourcesList from './ResourcesList.jsx';

export default class ResourcesView extends Component {
  componentDidMount() {
    $(this.refs.warehouse).foundation();
  }
  
  render() {
    return (
      <div ref="warehouse">
        <div className="row columns">
          <h1>Almacén</h1>
        </div>
        <ResourcesSearchForm />
        <hr/>
        <ResourcesList resources={this.props.resources} />
      </div>
    );
  }
}

ResourcesView.propTypes = {
  resources: PropTypes.object.isRequired,
};