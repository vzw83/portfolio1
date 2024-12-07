// @flow 
import * as React from 'react';
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from "./Contact_Styles";

type Props = {};
export const Contact = (props: Props) => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Name"}/>
                    <S.Field placeholder={"Subject"}/>
                    <S.Field as={"textarea"}  placeholder={"Message"}/>
                    <Button type={"submit"}> Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

