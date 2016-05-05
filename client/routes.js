import { mount } from 'react-mounter';
import React from 'react';
import MainLayout from '../imports/ui/MainLayout.jsx';
import Warehouse from '../imports/ui/Warehouse.jsx';
import Events from '../imports/ui/Events.jsx';
import Users from '../imports/ui/Users.jsx';

FlowRouter.route('/warehouse', {
  action() {
    mount(MainLayout, {content: <Warehouse />});
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