import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridColumnEndData: PropertyProps = {
    name: "grid column end",
    definition: "A propriedade grid-column-end define quantas colunas um item abrangerá ou em qual linha de coluna o item terminará.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O item abrangerá uma coluna."
        },
        {
            name: "span n",
            value: "Especifica o número de colunas que o item abrangerá"
        },
        {
            name: "column-line",
            value: "Especifica em qual coluna terminar a exibição do item"
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
            name: "3",
            code: "3"
        },
        {
            name: "4",
            code: "4"
        },
        {
            name: "5",
            code: "5"
        }
    ]
}