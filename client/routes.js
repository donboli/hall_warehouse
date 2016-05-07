import { mount } from 'react-mounter';
import React, { Component } from 'react';
import MainLayout from '../imports/ui/MainLayout.jsx';
import ResourceForm from '../imports/ui/ResourceForm.jsx';
import EventForm from '../imports/ui/EventForm.jsx';
import Warehouse from '../imports/ui/Warehouse.jsx';
import Events from '../imports/ui/Events.jsx';
import Users from '../imports/ui/Users.jsx';

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
    mount(MainLayout, {content: <Warehouse />});
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