import React from 'react';
import './Chip.scss'

const Chip = ({ text, variant, color, backgroundColor }) => {
  return (
    <span
      className={`chip ${variant}`}
      style={{ color, backgroundColor }}
    >
      {text}
    </span>
  );
};

export default Chip;
