import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import {Container,MainLeft,H1Span,Text,Title,MainRight} from './homeStyle'
import { Button } from '../../components/Buttons/button'
import Banner from '../../assets/banner.png'

export const Home =()=> {
  const Navigate = useNavigate()
  return (

    <>
      <Header />
      <Container>
        <MainLeft>
          <H1Span>Implemente</H1Span>
          <Title>O seu futuro global agora!</Title>

          <Text>
            Domine as tecnologias ultilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
          </Text>
          <Button title= "Começar agora" variant= "secondary" $onclickProp={()=>Navigate("/Login")}/>
        </MainLeft>

        <MainRight>
          <img src= {Banner} alt="banner" />
        </MainRight>
      </Container>
    </>
    
  )
}
