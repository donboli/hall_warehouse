import React, { Component } from 'react';
import Constants from '../../lib/constants.js';
import Resources from '../../api/resources.js';

export default class ResourceForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // get field contents
    let description = this.refs.description.value.trim();
    let quantity = this.refs.quantity.value.trim();
    let category = this.refs.category.value.trim();
 
    // insert new resource
    try{
      Resources.insert({
        description: description,
        quantity: quantity.toString(),
        category: category.toString(),
        createdAt: new Date(),
      });
    }
    catch(err) {
      console.log(err.message);
    }
 
    // clear form
    this.refs.description.value = null;
    this.refs.quantity.value = null;
    this.refs.category.value = "placeholder";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
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
                       ref="description"
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
                       ref="quantity" 
                       placeholder="Ingresa la cantidad"
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
                <select id="category"
                        ref="category"
                        defaultValue="placeholder">
                  <option value="placeholder" disabled>Categorías</option>
                  {Object.keys(Constants.resource_categories).map((value, index) => (
                    <option key={index} value={value}>
                      {Constants.resource_categories[value]}
                    </option>
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