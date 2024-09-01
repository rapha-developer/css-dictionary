import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridAutoColumnsData: PropertyProps = {
    name: "grid auto columns",
    definition: "A propriedade grid-auto-columns define um tamanho para as colunas em um contêiner de grade. Esta propriedade afeta apenas colunas com tamanho não definido.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O tamanho das colunas é determinado pelo tamanho do contêiner"
        },
        {
            name: "max-content",
            value: "Define o tamanho de cada coluna dependendo do maior item na coluna"
        },
        {
            name: "min-content",
            value: "Define o tamanho de cada coluna dependendo do menor item na coluna"
        },
        {
            name: "minmax(min.max)",
            value: "Define um intervalo de tamanho maior ou igual ao mínimo e menor ou igual ao máximo"
        },
        {
            name: "length",
            value: "Define o tamanho das colunas, usando um valor de comprimento legal. Leia sobre unidades de comprimento no glossário"
        },
        {
            name: "%",
            value: "Define o tamanho das colunas, usando um valor percentual"
        }
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "max-content",
            code: "max-content"
        },
        {
            name: "min-content",
            code: "min-content"
        },
        {
            name: "75px",
            code: "75px"
        },
        {
            name: "150px",
            code: "150px"
        },
        {
            name: "20%",
            code: "20%"
        },
    ]
}