import styled from "styled-components";

export const CardContainer = styled.div `
    width: 90%;
    background: #3b4651;
    position: relative;
    margin-bottom: 24px;

    @media(max-width: 580px){
        width: 100%;
    }
`
export const ImageBackground = styled.img `
    width: 100%;
    height: 180px;
`
export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 0 8px 16px;
`
export const UseInfo = styled.div `
    display: flex;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4 {
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 25px;
        color: #ffff;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #ffff;

    }
`
export const PostInfo = styled.div `
    margin-bottom: 12px;

    h4{
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 25px;
        color: #ffff;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #ffff;

        @media(max-width: 768px){
            font-size: 10px;
            width: 90%;
        }
    }
`
export const HasInfo = styled.div `
    margin-top: 12px;

    h4{
        
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 16px;
        color: #ffff;
    }

    p{
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 22px;
    }
`
