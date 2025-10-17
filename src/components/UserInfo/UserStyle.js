import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    margin-bottom: 24px;

`
export const UserPicture = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #fff;
    margin-right: 12px;
`
export const NameText = styled.div `
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
`
export const BarProgress= styled.div`
    width: 180px;
    height: 6px;
    position: relative;
    background: #fff;
    border-radius: 3px;

    &:after {
        content: '';
        position: absolute;
        height: 6px;
        width: ${({$percentual})=>$percentual}%;
        border-radius: 3px;
        top: 0;
        left: 0;
        background-color: #23dd7a;
    }
`