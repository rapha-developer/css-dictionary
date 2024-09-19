import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const letterSpacingData: PropertyProps = {
    name: "letter spacing",
    definition: "A propriedade letter-spacing aumenta ou diminui o espaço entre caracteres em um texto.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Define o espaço normal entre os caracteres. Este é o padrão"
        },
        {
            name: "length",
            value: "Define um comprimento que é usado como o espaço entre caracteres (valores negativos também são permitidos). Leia sobre unidades de comprimento"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "1px",
            code: "1px"
        },
        {
            name: "2px",
            code: "2px"
        },
        {
            name: "3px",
            code: "3px"
        },
        {
            name: "5px",
            code: "5px"
        },
        {
            name: "10px",
            code: "10px"
        },
        {
            name: "20px",
            code: "20px"
        },
        {
            name: "-1px",
            code: "-1px"
        },
        {
            name: "-2px",
            code: "-2px"
        },
        {
            name: "-3px;",
            code: "-3px;"
        },
        {
            name: "-5px",
            code: "-5px"
        },
        {
            name: "1cm",
            code: "1cm"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}