import Glitchometer from '../src/glitchometer';

const meta = {
  title: 'Components/Glitchometer',
  component: Glitchometer,
  parameters: {
    layout: 'centered',
  },
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
    value: '9,341.02%',
  },
};
