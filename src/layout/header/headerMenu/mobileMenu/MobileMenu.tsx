// @flow
import * as React from "react";
import {useState} from "react";
import {S} from '../HeaderMenu_Styles'
import {Menu} from "../menu/Menu";


type Props = {

};

export const MobileMenu: React.FC = (props: Props) => {

    const [isOpenMenu, setOpenMenu] = useState(false)


const onClickHandler = ( )=>{
    setOpenMenu(!isOpenMenu)
}

    return (
        <S.MobilePopup>
            <S.BurgerButton  onClick={onClickHandler}  isOpen = {isOpenMenu}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen = {isOpenMenu}>
               <Menu />
            </S.MobileMenuWrapper>
        </S.MobilePopup>
    );
};
