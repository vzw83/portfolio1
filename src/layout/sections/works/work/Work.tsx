// @flow 
import * as React from 'react';
import styled from "styled-components";

type Props = {
    title: string
    text: string
    src: string
};
export const Work = (props: Props) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={""}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: cornflowerblue;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
`
const Text = styled.p`
    
`
const Title = styled.h3`
    
`

const Link = styled.a`
    background-color: cornflowerblue;
`