import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const insetInlineData: PropertyProps = {
    name: "inset inline",
    definition: "A propriedade inset-inline define a distância entre um elemento e o elemento pai na direção inline. A propriedade inset-inline é uma propriedade abreviada para as seguintes propriedades: inset-inline-start e inset-inline-end. Se a propriedade inset-inline tiver dois valores: inset-inline: 10px 50px; a distância no início é 10px e a distância no final é 50px. Se a propriedade inset-inline tiver um valor: inset-inline: 10px; a distância no início e no fim é 10px",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Define a distância padrão do elemento inset-inline"
        },
        {
            name: "length",
            value: "Especifica a distância em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica a distância em porcentagem em relação ao tamanho do elemento pai no eixo correspondente."
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
            name: "0 20%",
            code: "0 20%"
        },
        {
            name: "10px 15px",
            code: "10px 15px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}