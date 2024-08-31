import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const gridData: PropertyProps = {
    name: "grid",
    definition: "A propriedade grid é uma propriedade abreviada para: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns & grid-auto-flow. Cria um sistema de layout baseado em grade, com linhas e colunas, sem a necessidade de usar flutuadores e posicionamento.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Nenhum dimensionamento específico das colunas ou linhas"
        },
        {
            name: "grid-template-rows / grid-template-columns",
            value: "Especifica o(s) tamanho(s) das colunas e linhas"
        },
        {
            name: "grid-template-areas",
            value: "Especifica o layout da grade usando itens nomeados"
        },
        {
            name: "grid-template-rows / grid-auto-columns",
            value: "Especifica o tamanho (altura) das linhas e o tamanho automático das colunas"
        },
        {
            name: "grid-auto-rows / grid-template-columns",
            value: "Especifica o tamanho automático das linhas e define a propriedade grid-template-columns"
        },
        {
            name: "grid-template-rows / grid-auto-flow grid-auto-columns",
            value: "Especifica o tamanho (altura) das linhas e como posicionar os itens colocados automaticamente e o tamanho automático das colunas"
        },
        {
            name: "grid-auto-flow grid-auto-rows / grid-template-columns",
            value: "Especifica como posicionar itens posicionados automaticamente, o tamanho automático das linhas e define a propriedade grid-template-columns"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "example 1",
            code: "100px / auto auto auto"
        },
        {
            name: "example 2",
            code: "auto / auto auto auto"
        },
        {
            name: "example 3",
            code: "auto / auto auto"
        },
        {
            name: "example 4",
            code: "80px 120px / auto auto auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}