import { Session } from 'meteor/session';
import { mount } from 'react-mounter';
import React, { Component } from 'react';
import MainLayout from '../imports/ui/MainLayout.jsx';
import ResourceForm from '../imports/ui/resources/ResourceForm.jsx';
import EventForm from '../imports/ui/events/EventForm.jsx';
import ResourcesContainer from '../imports/containers/ResourcesContainer.jsx';
import EventsContainer from '../imports/containers/EventsContainer.jsx';
import Users from '../imports/ui/users/Users.jsx';

// clear searchValue session on route enter
function clearSearchValue() {
  Session.set("searchValues", null);
}
FlowRouter.triggers.enter(clearSearchValue);

// redirect root to warehouse
FlowRouter.route('/', {
  action() {
    FlowRouter.go("/warehouse");
  }
});

// warehouse routes
let warehouseRoutes = FlowRouter.group({
  prefix: '/warehouse'
});

warehouseRoutes.route('/', {
  action() {
    mount(MainLayout, {content: <ResourcesContainer />});
  }
});

warehouseRoutes.route('/resource', {
  action() {
    mount(MainLayout, {content: <ResourceForm />});
  }
});

// events routes
let eventsRoutes = FlowRouter.group({
  prefix: '/events'
});

eventsRoutes.route('/', {
  action() {
    mount(MainLayout, {content: <EventsContainer />});
  }
});

eventsRoutes.route('/event', {
  action() {
    mount(MainLayout, {content: <EventForm />});
  }
});

// users routes
FlowRouter.route('/users', {
  action() {
    mount(MainLayout, {content: <Users />});
  }
});