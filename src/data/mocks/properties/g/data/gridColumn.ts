import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridColumnData: PropertyProps = {
    name: "grid column",
    definition: "A propriedade grid-column especifica o tamanho e a localização de um item de grade em um layout de grade e é uma propriedade abreviada para as seguintes propriedades: grid-column-start & grid-column-end.",
    category: "css property",
    values: [
        {
            name: "grid-column-start",
            value: "Especifica em qual coluna começar a exibir o item."
        },
        {
            name: "grid-column-end",
            value: "Especifica em qual linha de coluna o item deve ser interrompido ou quantas colunas devem ser abrangidas."
        }
    ],
    examples: [
        {
            name: "1 / span 2",
            code: "1 / span 2"
        },
        {
            name: "1 / span 3",
            code: "1 / span 3"
        },
        {
            name: "1 / span 4",
            code: "1 / span 4"
        },
        {
            name: "2 / span 1",
            code: "2 / span 1"
        },
        {
            name: "2 / span 2",
            code: "2 / span 2"
        },
        {
            name: "2 / span 3",
            code: "2 / span 3"
        },
        {
            name: "3 / span 2",
            code: "3 / span 2"
        },
    ]
}