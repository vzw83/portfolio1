// @flow
import * as React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {S} from "./Footer_Styles";


type Props = {};

const socialItemsData = [
    {
        iconId: "inst",
    },
    {
        iconId: "telega",
    },
    {
        iconId: "wk",
    },
    {
        iconId: "lincDin",
    },
]
export const Footer: React.FC = (props: Props) => {
    return (
        <S.Footer id={""}>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Vladimir</S.Name>
                <S.SocialList>
                    {
                        socialItemsData.map((el, index) => {
                            return (
                                <S.SocialLink>
                                    <S.SocialItem>
                                        <Icon key={index} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}
                                              iconId={el.iconId}/>
                                    </S.SocialItem>
                                </S.SocialLink>
                            )
                        })
                    }

                </S.SocialList>
                <S.Copiright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copiright>
            </FlexWrapper>

        </S.Footer>
    );
};

