import { mount } from 'react-mounter';
import React, { Component } from 'react';
import MainLayout from '../imports/ui/MainLayout.jsx';
import ResourceForm from '../imports/ui/resources/ResourceForm.jsx';
import EventForm from '../imports/ui/events/EventForm.jsx';
import WarehouseContainer from '../imports/containers/WarehouseContainer.jsx';
import Events from '../imports/ui/events/Events.jsx';
import Users from '../imports/ui/users/Users.jsx';

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
    mount(MainLayout, {content: <WarehouseContainer />});
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
    mount(MainLayout, {content: <Events />});
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