import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import React, { Component } from 'react';
import Resources from '../api/resources.js';
import ResourcesView from '../ui/resources/ResourcesView.jsx';
import LoadingMessage from '../ui/LoadingMessage.jsx';

function composer(props, onData) {
  if (Meteor.subscribe('resources').ready()) {
    onData(new Error('Error en la carga de datos'));
    const resources = Resources.find({}).fetch();
    onData(null, {resources});
  };
};

export default composeWithTracker(composer, LoadingMessage)(ResourcesView);