import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderBlockStartData: PropertyProps = {
    name: "border block start",
    definition: "A propriedade border-block-start é uma abreviação para estas propriedades: border-block-start-width, border-block-start-style e border-block-start-color. Ou seja, escreve-se border-block-start: <border-block-start-width> <border-block-start-style> <border-block-start-color>. Esta propriedade é muito semelhante às propriedades CSS border-bottom, border-left, border-right e border-top, mas a border-block-start depende da direção do bloco (writing-mode property)",
    category: "css property",
    values: [
        {
            name: "border-block-start-width",
            value: 'Especifica a largura da borda de um elemento no início da direção do bloco (writing-mode). O valor padrão é "médio"'
        },
        {
            name: "border-block-start-style",
            value: 'Especifica o estilo da borda de um elemento no início da direção do bloco (writing-mode). O valor padrão é "none"'
        },
        {
            name: "border-block-start-color",
            value: "Especifica a cor da borda de um elemento no início da direção do bloco (writing-mode). O valor padrão é a cor atual da borda"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "thin solid purple",
            code: "thin solid purple"
        },
        {
            name: "medium dotted gray",
            code: "medium dotted gray"
        },
        {
            name: "thick double blueviolet",
            code: "thick double blueviolet"
        },
        {
            name: "2px outset #9d9cae",
            code: "2px outset #9d9cae"
        },
        {
            name: "10px inset #241442",
            code: "10px inset #241442"
        },
        {
            name: "20px ridge rgb(82, 54, 242)",
            code: "20px ridge rgb(82, 54, 242)"
        },
        {
            name: "8px outset rgb(16, 13, 25)",
            code: "8px outset rgb(16, 13, 25)"
        },

        {
            name: "4px dashed green",
            code: "4px dashed green"
        },
        {
            name: "14px groove",
            code: "14px groove"
        },
        {
            name: "thin double",
            code: "thin double"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}