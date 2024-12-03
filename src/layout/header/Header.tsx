// @flow
import {useState} from "react";
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";


type Props = {};
export const Header = (props: Props) => {
    const [isOpenMenu, setOpenMenu] = useState(false)

    const menu = [
        "Home", "Skills", "Works", "Testimony", "Contact"
    ]

    const handlerButtonMenu = (click: boolean)=>{
        setOpenMenu(click)
    }

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo iconId={"html"}/>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <HeaderMenu items={menu}/>
                    <MobileMenu handlerButtonMenu={handlerButtonMenu} isOpenMenu={isOpenMenu} items={menu}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.secondaryBg};
   color: ${theme.colors.accent};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    opacity: 0.98;
`