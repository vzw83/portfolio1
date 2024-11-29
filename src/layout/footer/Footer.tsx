// @flow 
import * as React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

type Props = {};
export const Footer = (props: Props) => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Vladimir</Name>
                <SocialList>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"}viewBox={"0 0 21px 21px"} iconId={"inst"}/>
                        </SocialItem>
                    </SocialLink>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"}viewBox={"0 0 21px 21px"} iconId={"telega"}/>
                        </SocialItem>
                    </SocialLink>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"}viewBox={"0 0 21px 21px"} iconId={"wk"}/>
                        </SocialItem>
                    </SocialLink>
                    <SocialLink>
                        <SocialItem>
                            <Icon height={"21px"} width={"21px"}viewBox={"0 0 21px 21px"} iconId={"lincDin"}/>
                        </SocialItem>
                    </SocialLink>
                </SocialList>
                <Copiright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copiright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #625e5e;
`
const Name = styled.span`

`
const SocialList = styled.ul`
display: flex;
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copiright = styled.small`

`