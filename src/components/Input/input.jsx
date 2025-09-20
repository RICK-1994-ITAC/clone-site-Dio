import React from 'react'
import {InputContainer,IconContainer,InputText} from './inputStyle'

export const Input = ({leftIcon, ...sprad})=> {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer> {leftIcon}</IconContainer>: null}
      <InputText {...sprad}/>
    </InputContainer>
  )
}
