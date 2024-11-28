// @flow
import * as React from 'react';
import styled from "styled-components";

type Props = {

};
export const Menu = (props: Props) => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Testimony</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
   ul{
            display: flex;
            gap: 30px;
   }
`
// const StyledUl = styled.ul`
//     display: flex;
//     justify-content: space-between;
// `