// @flow 
import * as React from 'react';
import styled from "styled-components";

type Props = {
    
};
export const Slider = (props: Props) => {
    return (
        <StyledSlider>
            <Slide>
                <TextSlide>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TextSlide>
                <Name>@ivan ivanow</Name>
            </Slide>
        </StyledSlider>
    );
};
const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
`

const Slide = styled.div`
`

const TextSlide = styled.p`
    background-color: #ce9c60;
    //max-width: 500px;
    text-align: center;
`
const Name = styled.span``