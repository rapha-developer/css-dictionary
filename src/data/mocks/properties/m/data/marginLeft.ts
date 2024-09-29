import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const marginLeftData: PropertyProps = {
    name: "margin left",
    definition: "A propriedade margin-left define a margem esquerda de um elemento.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Especifica uma margem esquerda fixa em px, pt, cm, etc. O valor padrão é 0px. Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Especifica uma margem esquerda em porcentagem da largura do elemento que contém"
        },
        {
            name: "auto",
            value: "O navegador calcula uma margem esquerda"
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
            name: "-25px",
            code: "-25px"
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
            name: "50px",
            code: "50px"
        },
        {
            name: "auto",
            code: "auto"
        },
        {
            name: "5%",
            code: "5%"
        },
        {
            name: "10%",
            code: "10%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}