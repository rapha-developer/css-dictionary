import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textEmphasisData: PropertyProps = {
    name: "text emphasis",
    definition: "A propriedade text-emphasis é usada para aplicar marcas de ênfase ao texto. A propriedade text-emphasis é uma abreviação para text-emphasis-style e text-emphasis-color.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Nenhuma marca de ênfase é aplicada"
        },
        {
            name: "filled",
            value: "As marcas de ênfase são preenchidas com uma cor sólida"
        },
        {
            name: "open",
            value: "As marcas de ênfase são ocas"
        },
        {
            name: "dot",
            value: "As marcas de ênfase são pequenos círculos"
        },
        {
            name: "circle",
            value: "As marcas de ênfase são círculos"
        },
        {
            name: "double-circle",
            value: "As marcas de ênfase são círculos duplos"
        },
        {
            name: "triangle",
            value: "As marcas de ênfase são triângulos"
        },
        {
            name: "sesame",
            value: "As marcas de ênfase são gergelim"
        },
        {
            name: "string",
            value: "As marcas de ênfase são a sequência fornecida (um caractere)"
        },
        {
            name: "color",
            value: "Define a cor das marcas de ênfase"
        },
        genericPropertyValuesData.initial
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "filled",
            code: "filled"
        },
        {
            name: "open",
            code: "open"
        },
        {
            name: "dot",
            code: "dot"
        },
        {
            name: "circle",
            code: "circle"
        },
        {
            name: "double-circle",
            code: "double-circle"
        },
        {
            name: "triangle",
            code: "triangle"
        },
        {
            name: "sesame",
            code: "sesame"
        },
        {
            name: "'*'",
            code: "'*'"
        },
        {
            name: "triangle green",
            code: "triangle green"
        },
        {
            name: "sesame red",
            code: "sesame red"
        },
        {
            name: "double-circle pink",
            code: "double-circle pink"
        },
        genericPropertyExamplesData.initial
    ]
}