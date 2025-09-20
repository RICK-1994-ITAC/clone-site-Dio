import styled from "styled-components";

export const Container = styled.main `
    font-family: 'Open Sans', sans-serif;
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 426px){
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
`
export const MainLeft = styled.div `
    display: flex;
    align-items: start;
    flex-direction: column;
    font-family: "Open-Sans", sans-serif;

    @media(max-width: 768px){
        text-align: start;

        h2 {
            font-size: 1rem;
            width: 200px;
        }
            
    }

    @media(max-width: 426px){
        h2 {
            line-height: 1.5rem;
            text-align: center;
            margin-bottom: 1.5rem;
            width: 100%;
        }
    }
`
export const MainRight = styled.div `
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;

    input{
        padding: 1rem;
        margin-bottom: 1rem;
    }

    @media(max-width: 768px){
        text-align: center;
    }

    @media(max-width: 426px){
        button{
            margin-top: 1.5rem;
        }
    }

`
export const Wrapper = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h2 `
    line-height: 44px;
    font-size: 2rem;
    font-weight: 800;
    width: 350px;
`
export const TitleLogin = styled.p `
    line-height: 44px;
    font-size: 2rem;
    font-weight: 800;
    width: 350px;
    margin-bottom: 2rem;

    @media(max-width: 768px){
        
        font-size: 1rem;
        width: 200px;
        line-height: 20px;
    }
`
export const SubTitleLogin = styled.p `
    line-height: 25px;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 35px;

    @media(max-width: 768px){
        font-size: .7rem;
        width: 200px;
        line-height: 20px;   
    }
`
export const Form = styled.form `
    display: flex;
    flex-direction: column;
    
    @media(max-width: 768px){
        
        input{
            padding: 0;
        }
            
    }
`

export const ContainerAccount = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const ForgotPassword = styled.p `
    line-height: 19px;
    font-size: .8rem;
    font-weight: 800;
    color: #e5e044;
`
export const CreateAccount = styled.p `
    line-height: 19px;
    font-size: .8rem;
    font-weight: 800;
    color: #e23dd7;
`