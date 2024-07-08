import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundImageData: PropertyProps = {
    name: "background image",
    definition: "Especifica uma ou mais imagens de fundo para um elemento",
    category: "css property",
    values: [
        {
            name: "url('URL')",
            value: "O URL da imagem. Para especificar mais de uma imagem, separe os URLs com vírgula"
        },
        {
            name: "none",
            value: "Nenhuma imagem de fundo será exibida. Este é o padrão"
        },
        {
            name: "conic-gradient()",
            value: "Define um gradiente cônico como imagem de fundo. Defina pelo menos duas cores"
        },
        {
            name: "linear-gradient()",
            value: "Define um gradiente linear como imagem de fundo. Defina pelo menos duas cores (de cima para baixo)"
        },
        {
            name: "radial-gradient()",
            value: "Define um gradiente radial como imagem de fundo. Defina pelo menos duas cores (do centro para as bordas)"
        },
        {
            name: "repeating-conic-gradient()",
            value: "Repete um gradiente cônico"
        },
        {
            name: "repeating-linear-gradient()",
            value: "Repete um gradiente linear"
        },
        {
            name: "repeating-radial-gradient()",
            value: "Repete um gradiente radial"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "url()",
            code: "url('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9')"
        },
        {
            name: "none",
            code: "none"
        },
        {
            name: "conic-gradient",
            code: "conic-gradient(red, orange, yellow, green, blue)"
        },
        {
            name: "linear-gradient",
            code: "linear-gradient(red, yellow, blue)"
        },
        {
            name: "radial-gradient",
            code: "radial-gradient(red, green, blue)"
        },
        {
            name: "repeating-conic-gradient",
            code: "repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg)"
        },
        {
            name: "repeating-linear-gradient",
            code: "repeating-linear-gradient(-45deg, transparent 0 20px, black 20px 40px)"
        },
        {
            name: "repeating-radial-gradient",
            code: "repeating-radial-gradient(#e66465, #9198e5 20%)"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}