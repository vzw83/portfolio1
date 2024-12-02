// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TabMenu} from "./tabMenu/tabMenu";
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
                <TabMenu items={works}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
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
   
`