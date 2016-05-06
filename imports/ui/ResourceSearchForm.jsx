import React, { Component } from 'react';

export default class ResourceSearchForm extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="small-2 columns">
            <label for="middle-label" className="text-right middle">Buscar:</label>
          </div>
          <div className="small-10 columns">
            <input type="text" id="middle-label" placeholder="Buscar Recurso" />
          </div>
        </div>
        <div className="row">
          <div className="columns small-9">
            <select id="category" defaultValue="placeholder" >
              <option value="placeholder" disabled>Categorías</option>
              <option value="mantel">Mantel</option>
              <option value="funda">Funda</option>
              <option value="silla">Silla</option>
              <option value="loza">Loza</option>
              <option value="servilleta">Servilleta</option>
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