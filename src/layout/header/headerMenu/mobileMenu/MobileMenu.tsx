// @flow
import * as React from "react";
import {useState} from "react";
import {S} from '../HeaderMenu_Styles'
import {Menu} from "../menu/Menu";


type Props = {
    items: string[]
};

export const MobileMenu: React.FC<Props> = (props: Props) => {

    const [isOpenMenu, setOpenMenu] = useState(false)


const onClickHandler = ( )=>{
    setOpenMenu(!isOpenMenu)
}

    return (
        <S.MobilePopup>
            <S.BurgerButton onBlur={()=>setOpenMenu(false)} onClick={onClickHandler}  isOpen = {isOpenMenu}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen = {isOpenMenu}>
               <Menu items={props.items}/>
            </S.MobileMenuWrapper>
        </S.MobilePopup>
    );
};
