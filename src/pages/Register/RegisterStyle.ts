import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;

    @media(max-width:1000px){
        flex-direction: column;
        width: 90vw;
    }
`
export const MainLeft = styled.div`
    text-align: start;
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;

    @media(max-width:1000px){
        width: 50vw;
        justify-content: center;
    }

`
export const Text = styled.p `
    color: #ffff;
    font-size: 2rem;
    width: 70%;
    font-weight: 800;

    @media(max-width:500px){
        font-size: 1.5rem;
        width: 50vw;
        justify-content: center;
    }
`
export const MainRight = styled.div`
    text-align: center;
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 50%;

        @media(max-width:1000px){
            width: 100%;
            justify-content: center;
        }

        @media(max-width:500px){
            width: 50vw;
            justify-content: center;
        }
    }
`
export const Title = styled.h2`
    color: #ffff;
    font-size: 2rem;
`
export const SubTitle = styled.h4`
    color: #ffff;
    font-size: 1rem;
`
export const TextSpan = styled.div `
    font-size: 1rem;
    width: 100%;
    text-align: start;
`