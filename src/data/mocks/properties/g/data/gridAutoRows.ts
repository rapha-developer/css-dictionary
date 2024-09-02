import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridAutoRowsData: PropertyProps = {
    name: "grid auto rows",
    definition: "A propriedade grid-auto-rows define um tamanho para as linhas em um contêiner de grade. Esta propriedade afeta apenas linhas com tamanho não definido.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O tamanho das linhas é determinado pelo tamanho do maior item na linha"
        },
        {
            name: "max-content",
            value: "Define o tamanho de cada linha para depender do maior item na linha"
        },
        {
            name: "min-content",
            value: "Define o tamanho de cada linha para depender do menor item na linha"
        },
        {
            name: "length",
            value: "Define o tamanho das linhas, usando um valor de comprimento legal. Leia sobre unidades de comprimento no glossário"
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
            name: "50px",
            code: "50px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "30%",
            code: "30%"
        },
    ]
}