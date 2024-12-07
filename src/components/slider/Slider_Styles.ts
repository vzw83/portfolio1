import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
    max-width: 500px;
`

const Slide = styled.div`
`

const TextSlide = styled.p`
    //max-width: 500px;
    text-align: center;
`
const Name = styled.span`
    display: inline-block;
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        & + span{
            margin-left: 5px;
        }
        &.active{
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`
export const S = {
    Slider,
    Slide,
    TextSlide,
    Name,
    Pagination
}