// @flow 
import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

type Props = {};
export const Slider = (props: Props) => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <TextSlide>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</TextSlide>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
           <Pagination>
               <span></span>
               <span></span>
               <span></span>
           </Pagination>
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

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background-color: blue;
    }
`