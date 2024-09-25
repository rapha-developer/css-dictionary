import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const marginData: PropertyProps = {
    name: "margin",
    definition: "A propriedade margin define as margens de um elemento e é uma propriedade abreviada para as seguintes propriedades: margin-top, margin-right, margin-bottom e margin-left.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Especifica uma margem em px, pt, cm, etc. O valor padrão é 0. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica uma margem em porcentagem da largura do elemento que contém"
        },
        {
            name: "auto",
            value: "O navegador calcula uma margem"
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
            name: "25px",
            code: "25px"
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
            name: "10%",
            code: "10%"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "Exemplo 1",
            code: "10px 1px 15px 50px"
        },
        {
            name: "10px 1px",
            code: "10px 1px"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}