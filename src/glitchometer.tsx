import React from 'react';
import Odometer from './odometer';

type Props = {
  /** The value to display as a string - renders numbers and commas; other characters ignored */
  value: string;
  /** Color of main text */
  color?: string;
  /** Color of primary glitch */
  primary?: string;
  /** Color of secondary glitch */
  secondary?: string;
};

const Glitchometer: React.FC<Props> = ({
  value,
  color = 'var(--text-color)',
  primary = 'var(--primary-glitch-color)',
  secondary = 'var(--secondary-glitch-color)',
}) => (
  <div style={{ position: 'relative' }}>
    <div className="glitch-primary" style={getStyle(-3, 1)}>
      <Odometer value={value} color={primary} />
    </div>
    <div className="glitch-secondary" style={getStyle(3, 2)}>
      <Odometer value={value} color={secondary} />
    </div>
    <div style={getStyle(0, 3)}>
      <Odometer value={value} color={color} />
    </div>
    <div>
      <Odometer value={value} color="#00000000" />
    </div>
  </div>
);

const getStyle = (left = 0, zIndex = 1): React.CSSProperties => ({
  position: 'absolute',
  left,
  width: '100%',
  zIndex,
});

export default Glitchometer;
