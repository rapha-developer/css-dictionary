import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridColumnStartData: PropertyProps = {
    name: "grid column start",
    definition: "A propriedade grid-column-start define em qual linha de coluna o item começará.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O item será colocado seguindo o fluxo (flow)."
        },
        {
            name: "span n",
            value: "Especifica o número de colunas que o item abrangerá"
        },
        {
            name: "column-line",
            value: "Especifica em qual coluna iniciar a exibição do item"
        }
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "span 2",
            code: "span 2"
        },
        {
            name: "span 3",
            code: "span 3"
        },
        {
            name: "span 4",
            code: "span 4"
        },
        {
            name: "2",
            code: "2"
        },
        {
            name: "3",
            code: "3"
        },
        {
            name: "4",
            code: "4"
        }
    ]
}