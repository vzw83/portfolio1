// @flow 
import * as React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";

type Props = {};
export const Contact = (props: Props) => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"subject"}/>
                <Field as={"textarea"} placeholder={"message"}/>
                <Button type={"submit"}> Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};
const StyledContact = styled.section`
    min-height: 50vh;
    background-color: #27e0e0;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`
    background-color: white;
`