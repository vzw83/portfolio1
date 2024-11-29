// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";

type Props = {};
export const Slogan = (props: Props) => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};
const StyledSlogan = styled.section`
    background-color: #0fe10f;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
`