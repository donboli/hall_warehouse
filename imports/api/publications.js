import { Meteor } from 'meteor/meteor';
import Resources from './resources.js';

Meteor.publish('resources', () => {
  return Resources.find({});
});