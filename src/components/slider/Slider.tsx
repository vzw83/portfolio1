// @flow
import * as React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Slider_Styles";

type Props = {};
export const Slider: React.FC = (props: Props) => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.TextSlide>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</S.TextSlide>
                    <S.Name>@ivan ivanow</S.Name>
                </S.Slide>
            </FlexWrapper>
           <S.Pagination>
               <span></span>
               <span className={"active"}></span>
               <span></span>
           </S.Pagination>
        </S.Slider>
    );
};
