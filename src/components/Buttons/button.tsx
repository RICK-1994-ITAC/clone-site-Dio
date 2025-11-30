import React from "react";
import {ButtonContainer} from "./buttonStyle";
import type { IButton } from "./types";

export const Button =({title , variant = 'primary', $onclickProp}: IButton)=> {
  return (
    <ButtonContainer $variant ={variant} onClick={$onclickProp}>
        {title}
    </ButtonContainer>
  )
}
