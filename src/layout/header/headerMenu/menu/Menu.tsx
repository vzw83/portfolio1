// @flow
import * as React from 'react';
import {S} from '../HeaderMenu_Styles'

type Props = {
    items: string[]
};
export const Menu: React.FC<Props> = (props: Props) => {
    return (
        <ul>
            {props.items.map((el, index) => {
                // eslint-disable-next-line react/jsx-no-undef
                return <S.ListItem key={index}>
                    <S.Link href="">
                        {el}
                        <S.Mask>
                            <span>{el}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{el}</span>
                        </S.Mask>
                    </S.Link>
                </S.ListItem>
            })}
        </ul>
    );
};
