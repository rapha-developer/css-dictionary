import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textAlignData: PropertyProps = {
    name: "text align",
    definition: "A propriedade text-align especifica o alinhamento horizontal do texto em um elemento.",
    category: "css property",
    values: [
        {
            name: "left",
            value: "Alinha o texto à esquerda"
        },
        {
            name: "right",
            value: "Alinha o texto à direita"
        },
        {
            name: "center",
            value: "Centraliza o texto"
        },
        {
            name: "justify",
            value: "Estica as linhas para que cada linha tenha a mesma largura (como em jornais e revistas)"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "left",
            code: "left"
        },
        {
            name: "right",
            code: "right"
        },
        {
            name: "center",
            code: "center"
        },
        {
            name: "justify",
            code: "justify"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}