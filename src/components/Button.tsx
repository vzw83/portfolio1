import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    position: relative;
    z-index: 1;
    
    &:hover{
        &::before{
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    
    &::before{
        position: absolute;
        content: "";
        width: 78px;
        height: 10px;
        background-color: ${theme.colors.accent};
        bottom: 0;
        right: 0;
        left: 50%;  
        transform: translateX(-50%);
    }
`