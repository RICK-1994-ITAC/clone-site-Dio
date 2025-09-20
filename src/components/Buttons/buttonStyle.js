import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    background: #565656;
    border-radius: 1.5rem;
    position: relative;
    color: #fff;
    padding: 4px 12px;
    width: 100%;

    ${({variant})=> variant !== 'primary' && css `
        background-color: #e4105d;
        heigth: 33px;
        width: 100%;
        box-shadow:(2px 2px 3px black);

        &:hover{
            opacity: 0.5;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -5px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`