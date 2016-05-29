import { Meteor } from 'meteor/meteor';
import Resources from './resources.js';
import Events from './events.js';

Meteor.publish('resources', (query) => {
  if (query) {
    return Resources.find(
      { "description": {
          $regex: ".*" + query + ".*"
        }
      }
    );
  } else {
    return Resources.find();
  }
});

Meteor.publish('events', () => {
  return Events.find({});
});