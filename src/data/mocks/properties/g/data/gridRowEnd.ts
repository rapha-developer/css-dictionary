import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridRowEndData: PropertyProps = {
    name: "grid row end",
    definition: "A propriedade grid-row-end define quantas linhas um item abrangerá ou em qual linha o item terminará.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O item abrangerá uma linha."
        },
        {
            name: "span n",
            value: "Especifica o número de linhas que o item abrangerá"
        },
        {
            name: "row-line",
            value: "Especifica em qual linha terminar a exibição do item"
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