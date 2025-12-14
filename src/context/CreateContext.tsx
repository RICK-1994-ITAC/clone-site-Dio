import React ,{createContext, useState} from "react";
import type { TchildrenProvider, ThandleLogin } from "./types";
import { api } from "../services/api";
import type { Tdataform } from "../pages/Login/types";
import { useNavigate } from "react-router";

export const AuthContext = createContext<ThandleLogin>({} as ThandleLogin)

export const ContextProvider = ({children}:TchildrenProvider)=>{

    const [userS, setUser] =  useState({id: 0, nome: '', Email: '', password: ''})
    const navigate = useNavigate();

    const handleLogin = async (dataForm:Tdataform)=>{

        try {
            const { data } = await api.get(`users?Email=${dataForm.Email}`);
            const user = data.find((userP:Tdataform) => userP.Email === dataForm.Email && userP.password === dataForm.password);
    
            if (user) {
                setUser(user)
                console.log(user)
                navigate("/Feed");
            } else {
                alert('Dados inválidos');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignOut = ()=>{    
        userS.id != 0 && setUser({id: 0, nome: '', Email: '', password: ''})
        navigate('/Login')
    }

    return <AuthContext.Provider value={{userS,handleLogin, handleSignOut}}>
        {children}
    </AuthContext.Provider>
}