import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridRowData: PropertyProps = {
    name: "grid row",
    definition: "A propriedade grid-row especifica o tamanho e a localização de um item de grade em um layout de grade e é uma propriedade abreviada para as seguintes propriedades: grid-row-start & grid-row-end.",
    category: "css property",
    values: [
        {
            name: "grid-row-start",
            value: "Especifica em qual linha começar a exibir o item."
        },
        {
            name: "grid-row-end",
            value: "Especifica em qual linha o item deve ser interrompido ou quantas linhas devem ser abrangidas."
        }
    ],
    examples: [
        {
            name: "1 / span 1",
            code: "1 / span 1"
        },
        {
            name: "1 / span 2",
            code: "1 / span 2"
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
            name: "3 / span 1",
            code: "3 / span 1"
        },
    ]
}