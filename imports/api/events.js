import { Mongo } from 'meteor/mongo';
import Constants from '../lib/constants.js';
 
var Schemas = {};

// sub-schema to register the quantity of every resource used for an event
EventResource = new SimpleSchema({
  referencedResource: {
    type: String
  },
  quantity: {
    type: Number,
    label: "Cantidad utilizada"
  }
});

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
  },
  resources: {
    type: [EventResource],
    minCount: 1
  }
});

const Events = new Mongo.Collection('events');
Events.attachSchema(Schemas.Event);

export default Events;