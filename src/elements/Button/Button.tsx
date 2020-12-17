import * as React from 'react';

import ButtonStyled from './ButtonStyled';

interface ButtonProps {
  children: any;
  [propName: string]: {};
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <ButtonStyled>{children ? children : ""}</ButtonStyled>
);

export default Button;