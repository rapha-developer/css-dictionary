import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderInlineData: PropertyProps = {
    name: "border inline",
    definition: "A propriedade border-inline é uma abreviação para estas propriedades: border-inline-width, border-inline-style e border-inline-color. Ou seja, escreve-se border-inline: <border-inline-width> <border-inline-style> <border-inline-color>. Esta propriedade é muito semelhante à propriedade CSS border, mas a border-inline depende da direção inline (writing-mode, text-orientation & direction definem a direção inline)",
    category: "css property",
    values: [
        {
            name: "border-inline-width",
            value: 'Especifica a largura das bordas na direção inline (writing-mode). O valor padrão é "médio"'
        },
        {
            name: "border-inline-style",
            value: 'Especifica o estilo das bordas na direção inline (writing-mode). O valor padrão é "nenhum". Obrigatório'
        },
        {
            name: "border-inline-color",
            value: "Especifica a cor das bordas na direção inline. O valor padrão é a cor do texto"
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