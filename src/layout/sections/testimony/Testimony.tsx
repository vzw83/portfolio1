// @flow
import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
// import img from "./../../../assets/images/icons-sprite.svg";


type Props = {};
export const Testimony = (props: Props) => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
    background-color: #ce9c60;
`


