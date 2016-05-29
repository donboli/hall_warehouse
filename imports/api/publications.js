import { Meteor } from 'meteor/meteor';
import Resources from './resources.js';
import Events from './events.js';

Meteor.publish('resources', (query) => {
  if (query) {
    let searchParams = {};

    if (query.category != undefined) {
      searchParams.description = { $regex: ".*" + query.description + ".*" }
    }

    if (query.category != undefined) {
      searchParams.category = parseInt(query.category)
    }
    console.log(searchParams);

    return Resources.find(searchParams);
  } else {
    return Resources.find();
  }
});

Meteor.publish('events', () => {
  return Events.find({});
});