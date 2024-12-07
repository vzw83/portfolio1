import * as React from "react";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll}from "react-scroll";

type Props = {
    iconId: string
};

export const Logo = (props: Props) => {
    return (
        <a onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={props.iconId}/>
        </a>
    );
};