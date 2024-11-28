// @flow
import * as React from 'react';
import styled from "styled-components";
import {Logo} from '../../components/logo/Logo';
import {Menu} from '../../components/menu/Menu';

type Props = {};
export const Header = (props: Props) => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: cornflowerblue;
`