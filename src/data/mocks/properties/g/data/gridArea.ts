import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridAreaData: PropertyProps = {
    name: "grid area",
    definition: "A propriedade grid-area especifica o tamanho e a localização de um item de grade em um layout de grade e é uma propriedade abreviada para as seguintes propriedades:grid-row-start, grid-column-start, grid-row-end & grid-column-end. A propriedade grid-area também pode ser usada para atribuir um nome a um item de grade. Itens de grade nomeados podem então ser referenciados pela propriedade grid-template-areas do contêiner de grade. Veja exemplos abaixo.",
    category: "css property",
    values: [
        {
            name: "grid-row-start",
            value: "Especifica em qual linha começar a exibir o item"
        },
        {
            name: "grid-column-start",
            value: "Especifica em qual coluna começar a exibir o item."
        },
        {
            name: "grid-row-end",
            value: "Especifica em qual linha o item deve ser interrompido ou quantas linhas devem ser abrangidas."
        },
        {
            name: "grid-column-end",
            value: "Especifica em qual linha de coluna o item deve ser interrompido ou quantas colunas devem ser abrangidas."
        },
        {
            name: "itemname",
            value: "Especifica um nome para o item da grade"
        }
    ],
    examples: [
        {
            name: "example 1",
            code: "1 / 1 / span 2 / span 3"
        },
        {
            name: "example 2",
            code: "2 / 1 / span 2 / span 3"
        },
        {
            name: "example 3",
            code: "2 / 1 / span 1 / span 4"
        },
        {
            name: "example 4",
            code: "1 / 1 / span 2 / span 2"
        },
        {
            name: "example 5",
            code: "1 / 3 / span 2 / span 3"
        }
    ]
}