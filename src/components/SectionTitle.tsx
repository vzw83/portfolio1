import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    
    ${font({family:"'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})} ;
    //font-family: Josefin Sans, sans-serif;
    //font-weight: 600;
    //font-size: 36px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before{
        position: absolute;
        content: "";
        display: inline-block;
        
        
        width: 55px;
        height: 2px;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${theme.colors.accent};
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
   
`