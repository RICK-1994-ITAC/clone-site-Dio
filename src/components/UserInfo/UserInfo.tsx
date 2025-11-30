import React from 'react'
import {BarProgress,Container,NameText,UserPicture,} from './UserStyle'
import type { Tuserinfo } from './types'

export const UserInfo=({nome, image,$percentual}:Tuserinfo)=> {
  return (
    <>
        
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>
                    {nome}
                </NameText>
                <BarProgress $percentual={$percentual}/>
            </div>
            
        </Container>
    </>
    
  )
}
