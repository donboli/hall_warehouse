import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Resource from './Resource.jsx';

const resource = {description: 'dsfsdfsd', quantity: 4, category: 3}

storiesOf('Resource', module)
  .add('with resource', () => (
    <Resource resource={resource} />
  ))
  .add('without resource', () => (
    <Resource />
  ));