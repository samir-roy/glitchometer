import Glitchometer from '../src/glitchometer';

const meta = {
  title: 'Components/Glitchometer',
  component: Glitchometer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Value to display' },
    color: { control: 'color', description: 'Main text color' },
    primary: { control: 'color', description: 'Primary glitch color' },
    secondary: { control: 'color', description: 'Secondary glitch color' },
  },
};

export default meta;

export const Default = {
  args: {
    value: '12,345',
  },
};

export const CustomColors = {
  args: {
    value: '67,890',
    color: '#2a9d8f',
    primary: '#e76f51',
    secondary: '#e9c46a',
  },
};

export const Percentage = {
  args: {
    value: '99.9%',
  },
};

export const LongNumber = {
  args: {
    value: '1,234,567.89',
  },
};