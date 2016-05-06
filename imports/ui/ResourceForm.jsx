import React from 'react';

export default ResourceForm = React.createClass({
  render() {
    return (
      <form>
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
          <div className="small-2 columns">
            <label for="quantity" className="text-right middle">Cantidad:</label>
          </div>
          <div className="small-10 columns">
            <input type="number" 
                   id="quantity" 
                   name="points" 
                   min="0" 
                   max="100" 
                   step="10">
            </input>
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
            <input type="submit" 
                   className="button float-right" 
                   href="#"
                   value="Agregar">
            </input>
          </div>
        </div>
      </form>
    );
  }
});