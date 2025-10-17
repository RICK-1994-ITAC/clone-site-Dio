import styled from "styled-components";

export const ContainerFeed = styled.div`
    width: 100vw;
    heigth: 100vh;
    scrollbar-width: none;
`

export const Container = styled.main `
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media(max-width: 768px){
        width: 90vw;
        margin: 8rem auto 0;
    }

    @media(max-width: 580px){
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 376px){
        width: 90%;
        justify-content: center;
        
        div{
            width: 100%;
        }
    }

`
export const ContainerDinamic= styled.div `
    flex: ${({$flex})=>$flex};
    margin: 6rem 2rem;
    
    @media(max-width: 768px){
        margin: 0;
        width: 50%;
    }

    @media(max-width: 580px){
        width: 80%;
        margin-top: 0rem;
    }

`

export const Title = styled.h3 `
    line-height: 25px;
    font-size: 18px;
    font-weight: 800;
    width: 350px;
    margin-bottom: 24px;
`
export const TitleUser = styled.h3 `
    line-height: 25px;
    font-size: 18px;
    font-weight: 800;
    width: 350px;
    margin-bottom: 24px;
    color: #ffffff70;
`
