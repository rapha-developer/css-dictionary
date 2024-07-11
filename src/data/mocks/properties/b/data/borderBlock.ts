import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderBlockData: PropertyProps = {
    name: "border block",
    definition: "A propriedade border-block é uma propriedade abreviada para estas propriedades: border-block-width, border-block-style e border-block-color. Ou seja, escreve-se border-block: <border-block-width> <border-block-style> <border-block-color>. Esta propriedade é muito semelhante à propriedade CSS border, mas a border-block depende da direção do bloco (writing-mode property)",
    category: "css property",
    values: [
        {
            name: "border-block-width",
            value: 'Especifica a largura da borda na direção do bloco (writing-mode). O valor padrão é "médio"'
        },
        {
            name: "border-block-style",
            value: 'Especifica o estilo da borda na direção do bloco (writing-mode). O valor padrão é "none". Obrigatório'
        },
        {
            name: "border-block-color",
            value: "Especifica a cor da borda na direção do bloco (writing-mode). O valor padrão é a cor do texto"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "5px solid red",
            code: "5px solid red"
        },
        {
            name: "solid green",
            code: "solid green"
        },
        {
            name: "5px solid",
            code: "5px solid"
        },
        {
            name: "blue 10px dotted",
            code: "blue 10px dotted"
        },
        {
            name: "dashed hotpink 4px",
            code: "dashed hotpink 4px"
        },
        {
            name: "4px inset",
            code: "4px inset"
        },
        {
            name: "red 4px outset",
            code: "red 4px outset"
        },

        {
            name: "4px ridge",
            code: "4px ridge"
        },
        {
            name: "groove 4px",
            code: "groove 4px"
        },
        {
            name: "double",
            code: "double"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}