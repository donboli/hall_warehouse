import React from 'react';

export default ResourceList = React.createClass({
  render() {
    return (
      <div className="row columns">
        <div className="callout">
          Tenedores de plata: 12
        </div>
        <div className="callout">
          Tenedores de bronce: 22
        </div>
        <div className="callout">
          Servilletas de seda: 50
        </div>
        <div className="callout">
          Servilletas de papel: 100
        </div>
        <div className="callout">
          Manteles azules: 60
        </div>
        <div className="callout">
          Manteles rojos: 70
        </div>
      </div>
    );
  }
});