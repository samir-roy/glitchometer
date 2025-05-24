import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Glitchometer from '../src';

describe('snapshot tests', () => {
  it('should render all digits', () => {
    const { container } = render(<Glitchometer value="91,345.02%" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
