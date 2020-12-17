import styled from 'styled-components';

import ButtonCss from './ButtonCss';

interface ButtonProps {
  children: any;
  [propName: string]: {};
}

// Extend the below as needed
const ButtonStyled = styled.div<ButtonProps>`
  ${ButtonCss};
`;

export default ButtonStyled;