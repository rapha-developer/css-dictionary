import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridRowStartData: PropertyProps = {
    name: "grid row start",
    definition: "A propriedade grid-row-start define em qual linha o item começará, como também se preencherá ou não um intervalo (span) dentro do layout grid.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O item será colocado seguindo o fluxo."
        },
        {
            name: "span n",
            value: "Especifica o número de linhas que o item abrangerá"
        },
        {
            name: "row-line",
            value: "Especifica em qual linha iniciar a exibição do item."
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