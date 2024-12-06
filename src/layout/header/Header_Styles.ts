import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    background-color: ${theme.colors.secondaryBg};
   color: ${theme.colors.accent};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    opacity: 0.98;
`

export const S = {
    Header
}