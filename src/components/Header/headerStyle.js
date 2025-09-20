import styled from 'styled-components'

export const Wraper = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    font-family: 'Open Sans', sans-serif;
    position: absolute;
    top: 0;
    
    @media(max-width: 376px){
        text-align: center;
        right: 0;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #151515;
    height: 47px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    

    @media(max-width: 426px){
        padding: 0 1rem;
    }

    @media(max-width: 376px){
        gap: 0;

        .logoDio{
            width: 50px;
        }
    }

`

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const SearchInputContainer = styled.div `
    width: 175px;
    height: 30px;
    background-color: #202d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 426px){
        width: 90px;
        height: 25px;
    }

`

export const Menu = styled.a `
    font-family: 'open sans';
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: #ffff;
    margin-right: 24px;
    text-decoration: none;

    @media(max-width: 426px){
        font-size: 10px;
        margin-right: 10px;
    }
`

export const MenuRight = styled.a `
    font-family: 'open sans';
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: #ffff;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #ffff;

    @media(max-width: 320px){
       
    }
`