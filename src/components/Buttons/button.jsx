import React from "react";
import {ButtonContainer} from "./buttonStyle";

export const Button =({title , variant = 'primary', onclickProp})=> {
  return (
    <ButtonContainer variant ={variant} onClick={onclickProp}>
        {title}
    </ButtonContainer>
  )
}
