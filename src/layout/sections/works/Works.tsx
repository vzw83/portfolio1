// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Menu} from "../../../components/menu/Menu";
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import imgSocial from "./../../../assets/images/socialNetwork.png"
import imgClock from "./../../../assets/images/clock.png"

type Props = {};
export const Works = (props: Props) => {
    const works = ["All", "landing page", "React", "spa"]
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu items={works}/>
                <FlexWrapper justify={"space-between"}>
                    <Work title={"Social Network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do " +
                              "eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
                              " Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                          src={imgSocial}/>
                    <Work title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
                              " sed do eiusmod tempor incididunt ut labore et dolore magna " +
                              "aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing " +
                              "elit  ut labore et dolore magna aliqua Ut enim"}
                          src={imgClock}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: darkkhaki;
`