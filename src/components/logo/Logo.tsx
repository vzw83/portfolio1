import * as React from "react";
import {Icon} from "../icon/Icon";

type Props = {
    iconId: string
};

export const Logo = (props: Props) => {
    return (
        <Icon iconId={props.iconId}/>
    );
};