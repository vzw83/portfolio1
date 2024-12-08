// @flow
import * as React from 'react';
import {Element} from "react-scroll";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Main_Styles";
import photo from "./../../../assets/images/photo_2024-11-29_10-33-09.jpg"

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} >
                    <S.TextContainer>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Vladimir</span></S.Name>
                        <S.MainTitle>A Frontend Developer.</S.MainTitle>
                    </S.TextContainer>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt={"my photo"}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

