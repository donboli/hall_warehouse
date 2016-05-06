import { mount } from 'react-mounter';
import React, { Component } from 'react';
import MainLayout from '../imports/ui/MainLayout.jsx';
import ResourceForm from '../imports/ui/ResourceForm.jsx';
import Warehouse from '../imports/ui/Warehouse.jsx';
import Events from '../imports/ui/Events.jsx';
import Users from '../imports/ui/Users.jsx';

// redirect root to warehouse
FlowRouter.route('/', {
  action() {
    FlowRouter.go("/warehouse");
  }
});

FlowRouter.route('/warehouse', {
  action() {
    mount(MainLayout, {content: <Warehouse />});
  }
});

FlowRouter.route('/warehouse/resource', {
  action() {
    mount(MainLayout, {content: <ResourceForm />});
  }
});

FlowRouter.route('/events', {
  action() {
    mount(MainLayout, {content: <Events />});
  }
});

FlowRouter.route('/users', {
  action() {
    mount(MainLayout, {content: <Users />});
  }
});