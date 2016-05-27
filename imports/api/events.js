import { Mongo } from 'meteor/mongo';
import Constants from '../lib/constants.js';
 
var Schemas = {};

Schemas.Event = new SimpleSchema({
  hall: {
    type: Number,
    label: "Salón",
    allowedValues: Object.keys(Constants.halls)
                         .map((key) => { return parseInt(key); })
  },
  date: {
    type: Date,
    label: "Fecha"
  },
  type: {
    type: Number,
    label: "Tipo",
    allowedValues: Object.keys(Constants.event_types)
                         .map((key) => { return parseInt(key); }),
  }
});

const Events = new Mongo.Collection('events');
Events.attachSchema(Schemas.Event);

export default Events;