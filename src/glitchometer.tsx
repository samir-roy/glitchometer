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
  <div style={{ position: 'relative', height: 56, width: '100%' }}>
    <div className="glitch-primary" style={getStyle(-3, 1)}>
      <Odometer value={value} color={primary} />
    </div>
    <div className="glitch-secondary" style={getStyle(3, 1)}>
      <Odometer value={value} color={secondary} />
    </div>
    <div style={getStyle(0, 2)}>
      <Odometer value={value} color={color} />
    </div>
  </div>
);

const getStyle = (glitch = 0, zIndex = 1): React.CSSProperties => ({
  position: 'absolute',
  zIndex,
  left: '50%',
  width: 250,
  transform: `translate(calc(-50% ${glitch < 0 ? '-' : '+'} ${Math.abs(glitch)}px), 0px)`,
  WebkitTransform: `translate(calc(-50% ${glitch < 0 ? '-' : '+'} ${Math.abs(glitch)}px), 0px)`,
});

export default Glitchometer;
