import React from 'react';
import renderer from 'react-test-renderer';
import Glitchometer from '../src';

describe('snapshot tests', () => {
  it('should render all digits', () => {
    const tree = renderer.create(<Glitchometer value="90,345" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
