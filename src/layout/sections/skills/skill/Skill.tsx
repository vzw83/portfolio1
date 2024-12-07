// @flow
import * as React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skill_Styles";

type Props = {
    iconId: string
    title?: string
    description?: string
};
export const Skill: React.FC<Props> = (props: Props) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper >
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.StyledTitle>{props.title}</S.StyledTitle>
                <S.StyledText>{props.description}</S.StyledText>
            </FlexWrapper>

        </S.Skill>
    );
};
