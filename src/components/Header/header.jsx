import React from 'react'
import { HeaderContainer, Row, Wraper, SearchInputContainer, Menu , MenuRight, UserPicture} from './headerStyle';
import { Input } from '../Input/input';
import { Button } from '../Buttons/button'
import Logo from '../../assets/logo-dio.png'
import { FaSearch } from "react-icons/fa";

const Header= ({autenticado})=> {
  return (
    <Wraper>
        <HeaderContainer>
            <Row>
                <img src={Logo} alt="Logo da dio" className='logoDio'/>

                {autenticado ?
                <>
                    <SearchInputContainer>
                    <Input placeholder='Buscar' leftIcon = {<FaSearch/>}/>
                    </SearchInputContainer>
                    
                    <Menu>Live code</Menu>
                    <Menu>Global</Menu>
                </> 
                :null}
                
            </Row>
            <Row>
                {autenticado ?
                 <UserPicture src='https://avatars.githubusercontent.com/u/148507607?v=4'/>
                 :
                <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title= 'Entrar'/>
                    <Button title= 'Cadastrar'/> 
                </>
                 }
                
            </Row>
        </HeaderContainer>
    </Wraper>
    
  )
}

export default Header
