import React from 'react';
import ResourceSearchForm from './ResourceSearchForm.jsx';
import ResourceList from './ResourceList.jsx';

export default Warehouse = React.createClass({
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
});