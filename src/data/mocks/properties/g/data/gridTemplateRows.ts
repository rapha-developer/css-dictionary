import { PropertyProps } from "../../../../../types/PropertyProps";

export const gridTemplateRowsData: PropertyProps = {
    name: "grid template rows",
    definition: "A propriedade grid-template-rows especifica o número (e as alturas) das linhas em um layout de grade. Os valores são uma lista separada por espaços, onde cada valor especifica a altura da respectiva linha.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Nenhum tamanho é definido. As linhas são criadas se necessário"
        },
        {
            name: "auto",
            value: "O tamanho das linhas é determinado pelo tamanho do contêiner e pelo tamanho do conteúdo dos itens na linha"
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
            value: "Define o tamanho das linhas (rows), usando um valor de comprimento legal. Leia sobre unidades de comprimento no glossário"
        },
    ],
    examples: [
        {
            name: "auto auto",
            code: "auto auto"
        },
        {
            name: "50px 100px",
            code: "50px 100px"
        },
        {
            name: "20% 20%",
            code: "20% 20%"
        },
        {
            name: "30% 50%",
            code: "30% 50%"
        },
        {
            name: "150px auto",
            code: "150px auto"
        },
    ]
}