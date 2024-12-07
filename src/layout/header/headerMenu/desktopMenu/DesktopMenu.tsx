// @flow
import * as React from 'react';
import {S} from '../HeaderMenu_Styles'
import {Menu} from "../menu/Menu";


type Props = {

};
export const DesktopMenu: React.FC<Props> = (props: Props) => {
    return (
        <S.DesktopMenu>
            <Menu />
        </S.DesktopMenu>
    );
};

