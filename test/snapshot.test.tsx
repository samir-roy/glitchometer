import React from 'react';
import renderer from 'react-test-renderer';
import Glitchometer from '../src';

describe('snapshot tests', () => {
  it('should render all digits', () => {
    const tree = renderer.create(<Glitchometer value="91,345.02%" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
