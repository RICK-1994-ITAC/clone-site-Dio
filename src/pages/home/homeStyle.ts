import styled from "styled-components";

export const Container = styled.main `
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 426px){
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
`
export const MainLeft = styled.div `
    display: flex;
    align-items: start;
    flex-direction: column;
    font-family: "Open-Sans", sans-serif;

    @media(max-width: 768px){
        text-align: center;

        span,h2 {
            font-size: 1.5rem;
            width: 175px;
        }

        p {
            text-align: start;
            width: 250px;
        }
            
    }

    @media (max-width: 426px){
        align-items: center;
        span,h2 {
            font-size: 1.3rem;
            line-height: 32px;
        }
    }
`
export const H1Span = styled.span `
    color: #e4105d;
    font-size: 2rem;
    font-weight: 800;
    line-height: 44px;
`
export const Title = styled.h2 `
    line-height: 44px;
    font-size: 2rem;
    font-weight: 800;
    width: 350px;
`
export const Text = styled.p `
    font-size: 1rem;
    width: 420px;
    margin: 2rem 0;

    @media(max-width: 1024px){
        width: 300px;
    }

    @media(max-width: 426px){
        font-size: .8rem;
        
    }
`
export const MainRight = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media(max-width: 1024px){
        img {
            width: 100%;
        }
    }

    @media (max-width: 426px){
        width: 100%;

        img {
            width: 100%;
        }

    }
   
`