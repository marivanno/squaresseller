import React from 'react';
import getBrightness from 'getbrightness';

const useGetBrightness = (color) => {
  const type = getBrightness(color);
  return type >= 0.5 ? 'light' : 'dark';
};

export default useGetBrightness;
