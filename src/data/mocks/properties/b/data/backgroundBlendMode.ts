import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundBlendModeData: PropertyProps = {
    name: "background blend mode",
    definition: "Especifica o modo de mesclagem de cada camada de fundo (cor/imagem)",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Este é o padrão. Define o modo de mesclagem para normal"
        },
        {
            name: "multiply",
            value: "Define o modo de mesclagem para multiplicar"
        },
        {
            name: "screen",
            value: "Define o modo de mesclagem para tela"
        },
        {
            name: "overlay",
            value: "Define o modo de mesclagem para sobreposição"
        },
        {
            name: "darken",
            value: "Define o modo de mesclagem para escurecer"
        },
        {
            name: "lighten",
            value: "Define o modo de mesclagem para clarear"
        },
        {
            name: "color-dodge",
            value: "Define o modo de mesclagem para color-dodge"
        },
        {
            name: "saturation",
            value: "Define o modo de mesclagem para saturação"
        },
        {
            name: "color",
            value: "Define o modo de mesclagem para cor"
        },
        {
            name: "luminosity",
            value: "Define o modo de mesclagem para luminosidade"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "multiply",
            code: "multiply"
        },
        {
            name: "screen",
            code: "screen"
        },
        {
            name: "overlay",
            code: "overlay"
        },
        {
            name: "darken",
            code: "darken"
        },
        {
            name: "lighten",
            code: "lighten"
        },
        {
            name: "color-dodge",
            code: "color-dodge"
        },
        {
            name: "saturation",
            code: "saturation"
        },
        {
            name: "color",
            code: "color"
        },
        {
            name: "luminosity",
            code: "luminosity"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}