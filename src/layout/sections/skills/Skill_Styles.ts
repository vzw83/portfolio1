import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section``


const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 62px 20px 40px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 40px; 
    }
`
const IconWrapper = styled.div`
    position: relative;
    
    z-index: 1;
    margin-bottom: 84px;

    &::before {
        position: absolute;
        content: "";
        display: inline-block;

        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%) ;
        left: 50%;
        top: 50%;
        transform-origin: top left;

        z-index: -1;
    }

`
const StyledTitle = styled.h3`
    font-family: Josefin Sans, sans-serif;
    
    text-transform: uppercase;
    margin-bottom: 15px;
    
`
const StyledText = styled.p`
    line-height: 1.4;
    margin-bottom: 40px;
`

export const S = {
    Skills,
    Skill,
    IconWrapper,
    StyledTitle,
    StyledText
}