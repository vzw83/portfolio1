// @flow
import * as React from 'react';
import styled from "styled-components";

type Props = {
    items: string[]
};
export const HeaderMenu = (props: Props) => {
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