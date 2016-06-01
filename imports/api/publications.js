import { Meteor } from 'meteor/meteor';
import Resources from './resources.js';
import Events from './events.js';

Meteor.publish('resources', (query) => {
  if (query) {
    let searchParams = {};

    if (query.category != undefined) {
      searchParams.description = { $regex: ".*" + query.description + ".*" }
    }

    if (!(query.category == undefined || isNaN(query.category))) {
      searchParams.category = parseInt(query.category)
    }

    return Resources.find(searchParams);
  } else {
    return Resources.find();
  }
});

Meteor.publish('events', (query) => {
  if (query && query.dateFilter) {
    return Events.find({
      date: {
        $gte: new Date(query.startDate), 
        $lte: new Date(query.endDate)
      }
    });
  } else {
    return Events.find({});
  }
});