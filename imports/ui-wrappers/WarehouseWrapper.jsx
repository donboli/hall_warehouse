import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Resources from '../api/resources.js';
import Warehouse from '../ui/Warehouse.jsx';

function composer(props, onData) {
  if (Meteor.subscribe('resources').ready()) {
    const resources = Resources.find({}).fetch();
    onData(null, {resources});
  };
};

export default composeWithTracker(composer)(Warehouse);