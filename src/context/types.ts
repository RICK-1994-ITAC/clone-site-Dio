import type { Tuser } from "../../types"
import type { Tdataform } from "../pages/Login/types"

export type TchildrenProvider = {
    children: React.ReactNode
}

export type ThandleLogin ={
    handleLogin: (dataForm:Tdataform)=> Promise <void>
    userS : Tuser
    handleSignOut: ()=>void
}