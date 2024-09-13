import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const insetBlockEndData: PropertyProps = {
    name: "inset block end",
    definition: "A propriedade inset-block-end define a distância entre o final de um elemento e o elemento pai na direção do bloco. Observação: para que esta propriedade tenha efeito, ela precisa ter a propriedade position especificada.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Distância de inserção (inset) padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica a distância em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica a distância em porcentagem relativa ao tamanho do elemento pai no eixo correspondente."
        },
        {
            name: "NOTA!",
            value: "As propriedades CSS inset-block e inset-inline são muito semelhantes às propriedades CSS top, bottom, left e right, mas as propriedades inset-block e inset-inline dependem das direções block e inline."
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "0",
            code: "0"
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
            name: "20%",
            code: "20%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}