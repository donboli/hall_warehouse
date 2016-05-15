import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import React, { Component } from 'react';
import Resources from '../api/resources.js';
import Warehouse from '../ui/Warehouse.jsx';

function composer(props, onData) {
  if (Meteor.subscribe('resources').ready()) {
    onData(new Error('Error en la carga de datos'));
    const resources = Resources.find({}).fetch();
    onData(null, {resources});
  };
};

class LoadingMessage extends Component {
  render() {
    return (
      <div className="row columns">Cargando...</div>
    )
  }
}

export default composeWithTracker(composer, LoadingMessage)(Warehouse);