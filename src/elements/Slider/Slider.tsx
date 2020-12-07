import * as React from 'react';

import SliderStyled from './SliderStyled';

interface SliderProps {
  children: any;
  [propName: string]: {};
}

const Slider: React.FC<SliderProps> = ({ children }) => (
  <SliderStyled type="range">{children ? children : ""}</SliderStyled>
);

export default Slider;