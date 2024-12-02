// @flow 
import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

type Props = {};
export const Footer = (props: Props) => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Vladimir</Name>
                <SocialList>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"inst"}/>
                        </SocialItem>
                    </SocialLink>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telega"}/>
                        </SocialItem>
                    </SocialLink>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"wk"}/>
                        </SocialItem>
                    </SocialLink>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"lincDin"}/>
                        </SocialItem>
                    </SocialLink>
                </SocialList>
                <Copiright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copiright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
`
const Name = styled.span`
    margin-top: 40px;
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.14em;
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-5px);
    }
`
const Copiright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
    margin-bottom: 40px;
`