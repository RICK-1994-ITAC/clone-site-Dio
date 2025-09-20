import React from 'react'
import {BarProgress,Container,NameText,UserPicture,} from './UserStyle'

export const UserInfo=({nome, image,percentual})=> {
  return (
    <>
        
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>
                    {nome}
                </NameText>
                    <BarProgress percentual={percentual}/>
            </div>
            
        </Container>
    </>
    
  )
}
