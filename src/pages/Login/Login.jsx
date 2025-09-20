import React from 'react'
import Header from '../../components/Header/header'
import {Container,CreateAccount,ForgotPassword,MainLeft,MainRight,ContainerAccount,SubTitleLogin,Title,TitleLogin,Wrapper,Form} from './LoginStyle'
import { Button } from '../../components/Buttons/button'
import { Input } from '../../components/Input/input'
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

export const Login = ()=> {
  const Navigate = useNavigate()
  return (

    <>
      <Header/>
      <Container>
        <MainLeft>
          <Title>A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>

        </MainLeft>

        <MainRight>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>

            <Form>
              <Input placeholder='E-mail' leftIcon={<MdEmail/>}/>
              <Input placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
              <Button title= 'Entrar' variant='secondary' onclickProp={()=> Navigate("/Feed")}/>

            </Form>
              
            

            <ContainerAccount>
              <ForgotPassword>Esqueci Senha</ForgotPassword>
              <CreateAccount>Criar Conta</CreateAccount>
            </ContainerAccount>
            
          </Wrapper>
          
        </MainRight>
      </Container>
    </>
    
  )
}
