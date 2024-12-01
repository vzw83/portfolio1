// @flow 
import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";

type Props = {
    iconId: string
    title?: string
    description?: string
};
export const Skill = (props: Props) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper >
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>{props.description}</StyledText>
            </FlexWrapper>

        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    width: 380px;
    min-height: 338px;
    padding: 70px 20px 40px;
`
const IconWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 84px;

    &::before {
        position: absolute;
        content: "";
        display: inline-block;

        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%) ;
        left: 50%;
        top: 50%;
        transform-origin: top left;

        z-index: -1;
    }

`
const StyledTitle = styled.h3`
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 15px;
    
`
const StyledText = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 40px;
    line-height: 1.4;
`