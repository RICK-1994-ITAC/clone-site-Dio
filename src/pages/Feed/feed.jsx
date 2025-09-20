import React from 'react'
import Header from '../../components/Header/header'
import {Container,ContainerDinamic,Title,TitleUser,ContainerFeed} from './feedStyle'
import { Card } from '../../components/Cards/card'
import { UserInfo } from '../../components/UserInfo/UserInfo';




export const Feed = ()=> {
  return (

    <ContainerFeed>
      <Header autenticado={true}/>
      <Container>
        <ContainerDinamic flex={3}>
            <Title>Feed</Title>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ContainerDinamic>
        
        <ContainerDinamic flex={1}>
            <TitleUser># Ranking top 5 da semana</TitleUser>
            
            <UserInfo percentual={30} nome={'Henrique Lopes'} image={'https://avatars.githubusercontent.com/u/148507607?v=4'}/>
            <UserInfo percentual={100} nome={'Michele Ambrósio'} image={'https://avatars.githubusercontent.com/u/55519539?v=4'}/>
            <UserInfo percentual={50} nome={'Felipe Aguiar'} image={'https://avatars.githubusercontent.com/u/37452836?v=4'}/>
            <UserInfo percentual={80} nome={'Pablo Henrique'} image={'https://avatars.githubusercontent.com/u/45184516?v=4'}/>
        </ContainerDinamic>
        
      </Container>
    </ContainerFeed>
    
  )
}
