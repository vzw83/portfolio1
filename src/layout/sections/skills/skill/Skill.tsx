// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type Props = {
    iconId: string
    title?: string
    description?: string
};
export const Skill = (props: Props) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.description}</StyledText>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(255, 248, 220, 0.56);
    margin: 10px;
`
const StyledTitle = styled.h3`

`
const StyledText = styled.p`

`