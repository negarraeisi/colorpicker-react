import React from 'react';
import { ChromePicker } from 'react-color'; // React Color library

const ColorPicker = ({ onColorChange }) => {
  const handleChange = (color) => {
    onColorChange(color.hex); // Pass the selected color's hex value to the parent
  };

  return (
    <div>
      <ChromePicker onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
