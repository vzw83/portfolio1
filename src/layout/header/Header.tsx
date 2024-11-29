// @flow
import * as React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


type Props = {};
export const Header = (props: Props) => {
    const menu = [
        "Home", "Skills", "Works", "Testimony", "Contact"
    ]
    return (
        <StyledHeader>
                <Logo iconId={"html"}/>
            <Menu items={menu}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: cornflowerblue;
    display: flex;
    justify-content: space-between;
`