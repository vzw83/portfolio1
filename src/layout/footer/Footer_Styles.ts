import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
`
const Name = styled.span`
    
    ${font(
        {family:"'Josefin Sans', sans-serif",weight: 700, Fmax: 22, Fmin: 16})}    

    margin-top: 40px;
    letter-spacing: 0.14em;
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-5px);
    }
`
const Copiright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
    margin-bottom: 40px;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copiright
}