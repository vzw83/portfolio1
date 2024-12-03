import {theme} from "./Theme";

type Props = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({color, weight, lineHeight, family, Fmin, Fmax}: Props) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1140 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`