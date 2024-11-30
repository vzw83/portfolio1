// @flow 
import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "./../../../assets/images/photo_2024-11-29_10-33-09.jpg"

type Props = {};
export const Main = (props: Props) => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Vladimir</Name>
                    <MainTitle>A Frontend Developer.</MainTitle>
                </div>

                <Photo src={photo} alt={"my photo"}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: chocolate;
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`