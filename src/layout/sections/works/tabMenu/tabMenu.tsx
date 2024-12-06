// @flow
import * as React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

type Props = {
    tabsItems: Array<{ title: string, status: "all" | "landing" | "react" | "spa" }>
    filteredHandler: (filter: "all" | "landing" | "react" | "spa") => void
    filterStatus: string
};
export const TabMenu = (props: Props) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((el, index) => {
                    return <ListItem key={index}>
                        <Link active={props.filterStatus === el.status}
                              as={"button"} onClick={() => props.filteredHandler(el.status)}
                              href="">
                            {el.title}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li`

`
