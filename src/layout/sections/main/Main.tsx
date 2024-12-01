// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import photo from "./../../../assets/images/photo_2024-11-29_10-33-09.jpg"

type Props = {};
export const Main = (props: Props) => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextContainer>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Vladimir</span></Name>
                        <MainTitle>A Frontend Developer.</MainTitle>
                    </TextContainer>
                    <PhotoWrapper>
                        <Photo src={photo} alt={"my photo"}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: chocolate;
    display: flex;
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
   
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        content: "";
        display: inline-block;
        z-index: -1;
        
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        top: -24px;
        left: 24px;
    }
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`
const Name = styled.h2`
    font-family: Josefin Sans, sans-serif;
    letter-spacing: 0.05em;
    font-size: 50px;
    font-weight: 700;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::before {
            position: absolute;
            bottom: 0;
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            z-index: -1;
        }
    }
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`
const TextContainer = styled.div`
    text-align: left;
`