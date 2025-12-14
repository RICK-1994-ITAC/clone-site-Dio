import React, { useContext } from 'react'
import { HeaderContainer, Row, Wraper, SearchInputContainer, Menu , MenuRight, UserPicture} from './headerStyle';
import { Input } from '../Input/input';
import { Button } from '../Buttons/button'
import Logo from '../../assets/logo-dio.png'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/CreateContext';

const Header= ()=> {
    const navigate = useNavigate()
    const { userS,handleSignOut }= useContext(AuthContext) 
  return (
    <Wraper>
        <HeaderContainer>
            <Row>
                <img src={Logo} alt="Logo da dio" className='logoDio'/>

                {userS.id ?
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
                {userS.id ?<>
                    <UserPicture src='https://avatars.githubusercontent.com/u/148507607?v=4'/>
                    <Button title = 'Sair' variant='secondary' $onclickProp={handleSignOut}/>
                </>
                 :
                <>
                    <MenuRight href='#' $onclickProp={()=>{navigate('/')}}>Home</MenuRight>
                    <Button title= 'Entrar' $onclickProp={()=>{navigate('/Login')}}/>
                    <Button title= 'Cadastrar' $onclickProp={()=>{navigate('/Register')}} /> 
                </>
                 }
                
            </Row>
        </HeaderContainer>
    </Wraper>
    
  )
}

export default Header
