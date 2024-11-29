// @flow
import * as React from 'react';
import styled from "styled-components";

type Props = {
items: string[]
};
export const Menu = (props: Props) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((el, index)=>{
                    return <li key={index}><a href="">{el}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`
// const StyledUl = styled.ul`
//     display: flex;
//     justify-content: space-between;
// `