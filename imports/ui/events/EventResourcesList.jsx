import React, { Component } from 'react';
import Constants from '../../lib/constants.js';

export default class EventResourcesList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var result;
    if (this.props.eventResources == undefined || this.props.eventResources.length == 0) {
      result = <div className="callout">
        No hay recursos registrados
      </div>;
    } else {
      result = <div>
        { this.props.eventResources.map((eventResource, index) => (
          <div key={index} className="callout">
            <div className="row">
              <div className="columns small-4">
                <label className="text-right middle" htmlFor={"resourceQuantity" + index}>Cantidad:</label>
              </div>
              <div className="columns small-8">
                <input type="number"
                  step="1"
                  min="1"
                  max={eventResource.quantity}
                  id={"resourceQuantity" + index}
                  ref={"resourceQuantity" + index}
                  placeholder="Ingresar cantidad">
                </input>
              </div>
            </div>
          </div>
        ))}
      </div>;
    }

    return result;
  }
}