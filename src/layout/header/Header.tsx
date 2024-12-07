// @flow
import {useEffect, useState} from "react";
import * as React from "react";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"


type Props = {};


export const Header: React.FC = (props: Props) => {
    const [width, setWidth] = useState(window.innerWidth)

    const beakepoint = 768

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <S.Header id={"home"}>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo iconId={"html"}/>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    {width > beakepoint ? <DesktopMenu /> : <MobileMenu />}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

