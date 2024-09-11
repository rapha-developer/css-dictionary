import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const insetData: PropertyProps = {
    name: "inset",
    definition: "A propriedade inset define a distância entre um elemento e o elemento pai. A propriedade inset é uma propriedade abreviada para as seguintes propriedades: top, bottom, left, right.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Padrão. Distância de inserção padrão do elemento."
        },
        {
            name: "length",
            value: "Especifica o inset em px, pt, cm, etc. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
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
            name: "Exemplo 1",
            code: "5px 5% 30%"
        },
        {
            name: "Exemplo 2",
            code: "0 0 0 20%"
        },
        {
            name: "Exemplo 3",
            code: "10px 2px 30px 90px"
        },
        {
            name: "10px 1px",
            code: "10px 1px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}