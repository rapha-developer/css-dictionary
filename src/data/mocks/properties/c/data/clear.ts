import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const clearData: PropertyProps = {
    name: "clear",
    definition: "A propriedade clear especifica o que deve acontecer com o elemento próximo a um elemento flutuante.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Padrão. O elemento não é empurrado abaixo dos elementos flutuantes à esquerda ou à direita"
        },
        {
            name: "left",
            value: "O elemento é empurrado abaixo dos elementos flutuantes à esquerda"
        },
        {
            name: "right",
            value: "O elemento é colocado abaixo dos elementos flutuantes à direita"
        },
        {
            name: "both",
            value: "O elemento é empurrado abaixo dos elementos flutuantes esquerdo e direito"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "left",
            code: "left"
        },
        {
            name: "right",
            code: "right"
        },
        {
            name: "both",
            code: "both"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}