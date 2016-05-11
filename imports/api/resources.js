import { Mongo } from 'meteor/mongo';
import Constants from '../lib/constants.js';
 
var Schemas = {};

Schemas.Resource = new SimpleSchema({
  description: {
    type: String,
    label: "Descripción",
    max: 200
  },
  quantity: {
    type: Number,
    label: "Cantidad"
  },
  category: {
    type: Number,
    label: "Categoría",
    allowedValues: Object.keys(Constants.resource_categories)
                         .map((key) => { return parseInt(key); }),
  }
});

const Resources = new Mongo.Collection('resources');
Resources.attachSchema(Schemas.Resource);


export default Resources;