import React from 'react'
import Header from '../../components/Header/header'
import {Container,CreateAccount,ForgotPassword,MainLeft,MainRight,ContainerAccount,SubTitleLogin,Title,TitleLogin,Wrapper,Form} from './LoginStyle'
import { Button } from '../../components/Buttons/button'
import { Input } from '../../components/Input/input'
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'

const schema = yup
.object({
  Email: yup.string().email('email nao é válido').required(),
  password: yup.string().min(3,"Digite nomínimo 3 caracteres").required(),
})
.required()

export const Login = ()=> {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      Email: '',
      password: ''
      
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  
  
  

  const onSubmit = async (dataForm) => {
  try {
    const { data } = await api.get(`users?Email=${dataForm.Email}`);
    
    const user = data.find((user) => user.Email === dataForm.Email && user.password === dataForm.password);
    if (user) {
      navigate("/Feed");
    } else {
      alert('Dados inválidos');
    }
  } catch (error) {
    console.log(error);
  }
}

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

            <Form onSubmit={handleSubmit(onSubmit)}>
              
                <Input {...register('Email')} placeholder='E-mail' leftIcon={<MdEmail/>}/>
                <p style={{fontSize: 14, marginBottom: 10, color: "red"}}>{errors.Email? errors.Email.message:null}</p>
              
                <Input {...register('password')} placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
                <p style={{fontSize: 14, marginBottom: 10, color: "red"}}>{errors.password? errors.password.message:null}</p>

                <Button title= 'Entrar' variant='secondary' type= "submit"/>
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
