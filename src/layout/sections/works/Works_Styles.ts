import styled from "styled-components";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";

const Works = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }

`
const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    @media ${theme.media.desktop} {
        max-width: 540px;        
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(4px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }

    &:hover {
        &::before {
            //content: "";
            //position: absolute;
            //left: 0;
            //right: 0;
            //top: 0;
            //bottom: 0;
            //backdrop-filter: blur(4px);
            //background: rgba(0, 0, 0, 0.3);
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`
const Description = styled.div`
    padding: 25px 20px;
`
const Title = styled.h3`
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
`
const Text = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin: 14px 0 20px;
`

export const S = {
    Works,
    Work,
    Image,
    ImageWrapper,
    Description,
    Title,
    Text
}