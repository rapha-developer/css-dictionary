import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderInlineEndData: PropertyProps = {
    name: "border inline end",
    definition: "A propriedade border-inline-end é uma abreviação para estas propriedades: border-inline-end-width, border-inline-end-style e border-inline-end-color. Ou seja, escreve-se border-inline-end: <border-inline-end-width> <border-inline-end-style> <border-inline-end-color>. Esta propriedade é muito semelhante à propriedade CSS border, mas a border-inline-end depende da direção inline (writing-mode, text-orientation & direction definem a direção inline)",
    category: "css property",
    values: [
        {
            name: "border-inline-end-width",
            value: 'Especifica a largura da borda de um elemento no final da direção inline. O valor padrão é "medium"'
        },
        {
            name: "border-inline-end-style",
            value: 'Especifica o estilo da borda de um elemento no final da direção inline. O valor padrão é "none" (writing-mode). O valor padrão é "nenhum". Obrigatório'
        },
        {
            name: "border-inline-end-color",
            value: "Especifica a cor da borda de um elemento no final da direção inline. O valor padrão é a cor atual da borda."
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
            name: "groove 5px SkyBlue",
            code: "groove 5px SkyBlue"
        },
        {
            name: "double",
            code: "double"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}