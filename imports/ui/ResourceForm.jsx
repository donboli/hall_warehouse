import React, { Component } from 'react';
import Constants from '../lib/constants.js';

export default class ResourceForm extends Component {
  render() {
    return (
      <form>
        <div className="row columns">
          <h2>Recurso Nuevo</h2>
        </div>
        <div className="row columns">
          <div className="callout">
            <div className="row">
              <div className="small-3 columns">
                <label for="description" className="text-right middle">Descripción:</label>
              </div>
              <div className="small-9 columns">
                <input type="text" 
                       id="description" 
                       placeholder="Ingresar una descripción">
                </input>
              </div>
            </div>
            <div className="row">
              <div className="small-3 columns">
                <label for="quantity" className="text-right middle">Cantidad:</label>
              </div>
              <div className="small-9 columns">
                <input type="number" 
                       id="quantity" 
                       min="0" 
                       step="1">
                </input>
              </div>
            </div>
            <div className="row">
              <div className="small-3 columns">
                <label for="category" className="text-right middle">Categoría:</label>
              </div>
              <div className="small-9 columns">
                <select id="category" defaultValue="placeholder">
                  <option value="placeholder" disabled>Categorías</option>
                  {Object.keys(Constants.resource_categories).map((value, index) => (
                    <option value="{Constants.resource_categories[value]}">{Constants.resource_categories[value]}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row columns">
              <input type="submit" 
                     className="button" 
                     value="Agregar">
              </input>
            </div>
          </div>
        </div>
      </form>
    );
  }
}