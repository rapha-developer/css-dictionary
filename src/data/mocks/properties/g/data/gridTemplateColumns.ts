import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridTemplateColumnsData: PropertyProps = {
    name: "grid template columns",
    definition: "A propriedade grid-template-columns especifica o número (e as larguras) de colunas em um layout de grade. Os valores são uma lista separada por espaços, onde cada valor especifica o tamanho da respectiva coluna.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. Colunas são criadas se necessário"
        },
        {
            name: "auto",
            value: "O tamanho das colunas é determinado pelo tamanho do contêiner e pelo tamanho do conteúdo dos itens na coluna"
        },
        {
            name: "max-content",
            value: "Define o tamanho de cada coluna para depender do maior item na coluna"
        },
        {
            name: "min-content",
            value: "Define o tamanho de cada coluna para depender do menor item na coluna"
        },
        {
            name: "length",
            value: "Define o tamanho das colunas (columns), usando um valor de comprimento legal. Leia sobre unidades de comprimento no glossário."
        }
    ],
    examples: [
        {
            name: "auto auto",
            code: "auto auto"
        },
        {
            name: "auto x3",
            code: "auto auto auto"
        },
        {
            name: "50px 100px",
            code: "50px 100px"
        },
        {
            name: "10% 10% 10%",
            code: "10% 10% 10%"
        },
        {
            name: "max max",
            code: "max-content max-content"
        }
    ]
}