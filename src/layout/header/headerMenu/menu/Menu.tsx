// @flow
import * as React from 'react';
import {scroller} from "react-scroll";
import {S} from '../HeaderMenu_Styles'

type Props = {};


const ItemsMenu = [
    {title: "Home", href: "home"},
    {title: "Skills", href: "skills"},
    {title: "Works", href: "works"},
    {title: "Testimony", href: "testimony"},
    {title: "Contact", href: "contact"},
]
export const Menu: React.FC<Props> = (props: Props) => {

    return(
        <ul>
            <h1></h1>
            {ItemsMenu.map((el, index) => {
                // eslint-disable-next-line react/jsx-no-undef
                return <S.ListItem key={index}>
                    <S.NavLink to={el.href} smooth={true} activeClass="active" spy={true} offset={2}>
                        {el.title}
                        <S.Mask>
                            <span>{el.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{el.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};
