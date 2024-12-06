// @flow 
import {useState} from "react";
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
const tabsItems: Array<{ title: string; status: "all" | "landing" | "react" | "spa"; }> = [
    {title: "All", status: "all"},
    {title: "landing page", status: "landing"},
    {title: "React", status: "react"},
    {title: "spa", status: "spa"},
]
const workData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: imgSocial,
        type: "spa",
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna " +
            "aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing " +
            "elit  ut labore et dolore magna aliqua Ut enim",
        src: imgClock,
        type: "react"
    }
]
export const Works = (props: Props) => {
    const [filterStatus, setFilterStatus] = useState("all")
    let filteredWorks = workData
    if (filterStatus === "landing") {
        filteredWorks = filteredWorks.filter(el => el.type === "landing")
    }
    if (filterStatus === "react") {
        filteredWorks = filteredWorks.filter(el => el.type === "react")
    }
    if (filterStatus === "spa") {
        filteredWorks = filteredWorks.filter(el => el.type === "spa")
    }

    const filteredHandler = (filter: "all" | "landing" | "react" | "spa")=>{
        setFilterStatus(filter)
    }

    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu filterStatus={filterStatus} filteredHandler={filteredHandler} tabsItems={tabsItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((el, index) => {
                        return <Work key={index} title={el.title}
                                     text={el.text}
                                     src={el.src}
                                     type={el.type}
                                     />
                    })}


                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }

`