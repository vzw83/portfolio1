// @flow
import * as React from 'react';
import {Button} from "../../../../components/Button";
import {Link} from '../../../../components/Link';
import {S} from "../Works_Styles";


type Props = {
    title: string
    text: string
    src: string
    type: string
};
export const Work: React.FC<Props> = (props: Props) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={""}/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link  href={"#"}>demo</Link>
                <Link  href={"#"}>Code</Link>
            </S.Description>

        </S.Work>
    );
};
