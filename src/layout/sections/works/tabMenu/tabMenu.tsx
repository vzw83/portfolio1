// @flow
import * as React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

type Props = {
items: string[]
};
export const TabMenu = (props: Props) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items.map((el, index)=>{
                    return <ListItem key={index}><Link href="">{el}</Link></ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`
const ListItem = styled.li`
    
`
