import React from "react";
import Header from "../../components/Header/header";
import {Container,MainLeft,Text,MainRight,SubTitle,Title,TextSpan} from "./RegisterStyle"
import { Input } from "../../components/Input/input";
import { Button } from "../../components/Buttons/button";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUserAlt } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';
import { useNavigate } from "react-router";
import type { Tdataregister } from "./types";

const schema = yup
.object({
  nome: yup.string().required('Nome não pode estar vazio'),
  Email: yup.string().email('email nao é válido').required(),
  password: yup.string().min(3,"Digite nomínimo 3 caracteres").required(),
})
.required()

export const Register = ()=>{

  const navigate = useNavigate()
  const{register, handleSubmit,formState:{errors}}= useForm({
    resolver:yupResolver(schema),
    mode: "onChange"
  })

  const submit = async(dataRegister:Tdataregister)=>{
    try {
      await api.post('/users',dataRegister)

      alert('Usuário cadastrado com sucesso!')
      navigate('/Login')

    
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
    
  return(
    <>
      <Header/>
      <Container>
        <MainLeft>
          <Text>
            A plataforma para você aprender com experts,
            dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Text>
        </MainLeft>

        <MainRight>
          <Title>
            Comece agora gratis
          </Title>
          <SubTitle>
            Crie sua conta e make the change._
          </SubTitle>

          <form onSubmit={handleSubmit(submit)}>
            <Input {...register('nome')} placeholder={'Nome Completo'} leftIcon={<FaUserAlt/>}/>

            {errors.nome?<p style={{fontSize: 14, marginBottom: 10, color: "red"}}>{errors.nome? errors.nome.message:null}</p>:null}


            <Input {...register("Email")} placeholder={'E-mail'} leftIcon={<MdEmail/>}/>

            {errors.Email?<p style={{fontSize: 14, marginBottom: 10, color: "red"}}>{errors.Email? errors.Email.message:null}</p>:null}

            <Input {...register("password")} placeholder={'Password'} type = {"password"} leftIcon={<MdLock/>}/>

            {errors.password?<p style={{fontSize: 14, marginBottom: 10, color: "red"}}>{errors.password? errors.password.message:null}</p>:null}
            
            <Button title={'Criar minha conta'} variant={`secondary`} type= "submit"/>

            <TextSpan>
              Ao clicar em, "criar minha conta", declaro que concordo com as políticas de 
              privacidade e termos de uso da DIO.
            </TextSpan>

            <TextSpan>
               <p style={{fontSize: 13}}>Já tenho conta.  <span style={{color: "green", cursor:"pointer"}}>Fazer Login</span></p>
            </TextSpan>
          </form>

        </MainRight>

      </Container>
    </>
  )
}