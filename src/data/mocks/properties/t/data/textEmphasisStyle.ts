import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textEmphasisStyleData: PropertyProps = {
    name: "text emphasis style",
    definition: "A propriedade text-emphasis-style define o estilo das marcas de ênfase.",
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
        genericPropertyValuesData.initial,
        {
            name: "DICA:",
            value: "O tamanho das marcas de ênfase é cerca de 50% do tamanho da fonte."
        }
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
        genericPropertyExamplesData.initial
    ]
}