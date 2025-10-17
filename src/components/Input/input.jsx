
import React from 'react'
import {InputContainer,IconContainer,InputText} from './inputStyle'


export const Input = ({props,leftIcon,nome, ...spread})=> {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer> {leftIcon}</IconContainer>: null}
      <InputText {...props} {...spread}/>
    </InputContainer>
  )
}
