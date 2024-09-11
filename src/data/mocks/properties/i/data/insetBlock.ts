import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const insetBlockData: PropertyProps = {
    name: "inset block",
    definition: "A propriedade inset-block define a distância entre um elemento e o elemento pai na direção do bloco. A propriedade inset-block é uma propriedade abreviada para as seguintes propriedades: inset-block-start e inset-block-end.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. O valor inset-block padrão do elemento."
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
            name: "0",
            code: "0"
        },
        {
            name: "10px",
            code: "10px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "10% 30%",
            code: "10% 30%"
        },
        {
            name: "10% 1px",
            code: "10% 1px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}