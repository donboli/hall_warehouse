import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import React, { Component } from 'react';
import Events from '../api/events.js';
import EventsView from '../ui/events/EventsView.jsx';
import LoadingMessage from '../ui/LoadingMessage.jsx';

function composer(props, onData) {
  if (Meteor.subscribe('events', Session.get("searchValues")).ready()) {
    onData(new Error('Error en la carga de datos'));
    const events = Events.find({}, { sort: [["type", "asc"]] }).fetch();
    onData(null, {events});
  };
};

export default composeWithTracker(composer, LoadingMessage)(EventsView);