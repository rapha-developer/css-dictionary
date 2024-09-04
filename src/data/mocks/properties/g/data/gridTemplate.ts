import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridTemplateData: PropertyProps = {
    name: "grid template",
    definition: "A propriedade grid-template é uma propriedade abreviada para as seguintes propriedades: grid-template-rows, grid-template-columns & grid-template-areas.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Nenhum dimensionamento específico das colunas ou linhas."
        },
        {
            name: "grid-template rows / grid-template-columns",
            value: "Especifica o(s) tamanho(s) das colunas e linhas."
        },
        {
            name: "grid-template-areas",
            value: "Especifica o layout da grade usando itens nomeados."
        }
    ],
    examples: [
        {
            name: "Exemplo 1",
            code: "100px / auto auto auto"
        },
        {
            name: "Exemplo 2",
            code: "auto / auto auto auto"
        },
        {
            name: "Exemplo 3",
            code: "auto / auto auto"
        },
        {
            name: "Exemplo 4",
            code: "80px 120px / auto auto auto"
        },
    ]
}