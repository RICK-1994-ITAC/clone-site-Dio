import React from 'react'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UseInfo} from './cardStyle'
import { UserPicture } from '../Header/headerStyle'
import { AiOutlineLike } from "react-icons/ai";

export const Card= ()=> {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.dio.me/courses/cover/41eb84e4-c5c8-4b95-9b80-4106ba2aa926_landingpage.png'/>

        <Content>
            <UseInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/148507607?v=4'/>
                <div>
                    <h4>Henrique Lopes</h4>
                    <p>há 2 minutos</p>
                </div>
            </UseInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito do curso de React no bootcamp dio do Formação React JS...<strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript #REACT</h4>
                <p>
                    <AiOutlineLike/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
