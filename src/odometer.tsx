import React from 'react';
import Digit from './digit';

type Props = {
  /** The value to display as a string - renders numbers and commas; other characters ignored */
  value: string;
  /** the color to render the digits in */
  color?: string;
};

const Odometer: React.FC<Props> = ({ value, color }) => (
  <div>
    {[...value].map((char, i) => (
      <React.Fragment key={getKey(i, 'f')}>
        <Digit key={getKey(i, 'd')} d={char} color={color} />
        {i < value.length - 1 && <Gap key={getKey(i, 'g')} />}
      </React.Fragment>
    ))}
  </div>
);

const Gap = () => <svg width="8" height="54" viewBox="0 0 8 54" fill="none" xmlns="http://www.w3.org/2000/svg" />;

const getKey = (i: number, p: string) => `${p}${i}`;

export default Odometer;
