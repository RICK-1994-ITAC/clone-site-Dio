
import React from 'react'
import {InputContainer,IconContainer,InputText} from './inputStyle'
import type {Tinput,Iinput } from './type'


export const Input = ({leftIcon, ...spread}:Iinput & Tinput)=> {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer> {leftIcon}</IconContainer>:null}
      <InputText {...spread}/>
    </InputContainer>
  )
}
