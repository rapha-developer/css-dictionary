import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const backgroundColorData: PropertyProps = {
    name: "background color",
    definition: "Especifica a cor de fundo de um elemento",
    category: "css property",
    values: [
        {
            name: "<color>",
            value: "Especifica a cor de fundo. Consulte os valores de cores CSS para obter uma lista completa de valores de cores possíveis."
        },
        {
            name: "transparent",
            value: "Especifica que a cor de fundo deve ser transparente. Este é o padrão"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "rgb",
            code: "rgb(0, 255, 153)"
        },
        {
            name: "hsl",
            code: "hsla(196, 100%, 50%, 1)"
        },
        {
            name: "hex",
            code: "#f200ff"
        },
        {
            name: "coral",
            code: "coral"
        },
        {
            name: "transparent",
            code: "transparent"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}