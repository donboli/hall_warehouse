import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { composeWithTracker } from 'react-komposer';
import React, { Component } from 'react';
import Resources from '../api/resources.js';
import ResourcesView from '../ui/resources/ResourcesView.jsx';
import LoadingMessage from '../ui/LoadingMessage.jsx';

function composer(props, onData) {
  if (Meteor.subscribe('resources', Session.get("searchValue")).ready()) {
    onData(new Error('Error en la carga de datos'));
    let resources;
    resources = Resources.find({}, { sort: [["description", "asc"]] });
    onData(null, {resources});
  };
};

export default composeWithTracker(composer, LoadingMessage)(ResourcesView);