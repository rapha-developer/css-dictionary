import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderInlineStartData: PropertyProps = {
    name: "border inline start",
    definition: "A propriedade border-inline-start é uma abreviação para estas propriedades: border-inline-start-width, border-inline-start-style e border-inline-start-color. Ou seja, escreve-se border-inline-start: <border-inline-start-width> <border-inline-start-style> <border-inline-start-color>. Esta propriedade é muito semelhante à propriedade CSS border, mas a border-inline-start depende da direção inline (writing-mode, text-orientation & direction definem a direção inline)",
    category: "css property",
    values: [
        {
            name: "border-inline-start-width",
            value: 'Especifica a largura da borda de um elemento no início da direção inline. O valor padrão é "medium"'
        },
        {
            name: "border-inline-start-style",
            value: 'Especifica o estilo da borda de um elemento no início da direção inline. O valor padrão é "none". Obrigatório'
        },
        {
            name: "border-inline-start-color",
            value: "Especifica a cor da borda de um elemento no início da direção inline. O valor padrão é a cor atual da borda"
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