import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textIndentData: PropertyProps = {
    name: "text indent",
    definition: "A propriedade text-indent especifica o recuo da primeira linha em um bloco de texto. Valores negativos são permitidos. A primeira linha será recuada para a esquerda se o valor for negativo.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Define um recuo fixo em px, pt, cm, em, etc. O valor padrão é 0. Leia sobre unidades de comprimento no glossário."
        },
        {
            name: "%",
            value: "Define o recuo em % da largura do elemento pai"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
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
            name: "100px",
            code: "100px"
        },
        {
            name: "1cm",
            code: "1cm"
        },
        {
            name: "2cm",
            code: "2cm"
        },
        {
            name: "10%",
            code: "10%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}