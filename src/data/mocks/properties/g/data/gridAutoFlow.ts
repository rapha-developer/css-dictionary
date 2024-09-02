import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridAutoFlowData: PropertyProps = {
    name: "grid auto flow",
    definition: "A propriedade grid-auto-flow controla como os itens colocados automaticamente são inseridos na grade.",
    category: "css property",
    values: [
        {
            name: "row",
            value: "Valor padrão. Coloca itens preenchendo cada linha"
        },
        {
            name: "column",
            value: "Coloca itens preenchendo cada coluna"
        },
        {
            name: "dense",
            value: "Coloque itens para preencher quaisquer buracos na grade"
        },
        {
            name: "row dense",
            value: "Posiciona os itens preenchendo cada linha e preenche todos os buracos na grade"
        },
        {
            name: "column dense",
            value: "Posiciona os itens preenchendo cada coluna e preenche todos os buracos na grade"
        }
    ],
    examples: [
        {
            name: "row",
            code: "row"
        },
        {
            name: "column",
            code: "column"
        },
        {
            name: "dense",
            code: "dense"
        },
        {
            name: "row dense",
            code: "row dense"
        },
        {
            name: "column dense",
            code: "column dense"
        },
    ]
}