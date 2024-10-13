import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const mixBlondeModeData: PropertyProps = {
    name: "mix blonde mode",
    definition: "A propriedade mix-blend-mode especifica como o conteúdo de um elemento deve se misturar com seu plano de fundo do parente direto (pai).",
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
            value: "Define o modo de mesclagem para subexposição de cores"
        },
        {
            name: "color-burn",
            value: "Define o modo de mesclagem para queima de cor"
        },
        {
            name: "difference",
            value: "Define o modo de mesclagem para diferença"
        },
        {
            name: "hue",
            value: "Define o modo de mesclagem para matiz (hue - colormetria)"
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
            name: "color-burn",
            code: "color-burn"
        },
        {
            name: "difference",
            code: "difference"
        },
        {
            name: "exclusion",
            code: "exclusion"
        },
        {
            name: "hue",
            code: "hue"
        },
        {
            name: "saturation",
            code: "saturation"
        },
        {
            name: "color",
            code: "color"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}