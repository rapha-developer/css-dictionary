import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const borderData: PropertyProps = {
    name: "border",
    definition: "A propriedade border é uma propriedade abreviada para: border-width, border-style e border-color. Ou seja, escreve-se border: <border-width> <border-style> <border-color>",
    category: "css property",
    values: [
        {
            name: "border-width",
            value: 'Especifica a largura da borda. O valor padrão é "médio"'
        },
        {
            name: "border-style",
            value: 'Especifica o estilo da borda. O valor padrão é "none"'
        },
        {
            name: "border-color",
            value: "Especifica a cor da borda. O valor padrão é a cor do texto"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "2px solid purple",
            code: "2px solid purple"
        },
        {
            name: "4px dashed blue",
            code: "4px dashed blue"
        },
        {
            name: "6px dotted green",
            code: "6px dotted green"
        },
        {
            name: "medium solid black",
            code: "medium solid black"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}