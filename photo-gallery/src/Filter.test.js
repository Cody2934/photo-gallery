import React from 'react';
import Filter from './Filter.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Filter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});