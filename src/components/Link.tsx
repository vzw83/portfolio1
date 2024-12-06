import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a<{ active?: boolean }>`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px;

    position: relative;
    z-index: 1;

    &:hover {
        &::before {
            height: 10px;
        }
    }

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        background-color: ${theme.colors.accent};
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: -1;

        ${props => props.active && css<{ active?: boolean }>`
            height: 10px;
        `
        }
`