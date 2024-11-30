import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const wordSpacingData: PropertyProps = {
    name: "word spacing",
    definition: "A propriedade word-spacing aumenta ou diminui o espaço em branco entre as palavras. Valores negativos são permitidos.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Define o espaço normal entre palavras (0,25em). Este é o padrão."
        },
        {
            name: "length",
            value: "Define um espaço adicional entre palavras (em px, pt, cm, em, etc). Valores negativos são permitidos. Leia sobre unidades de comprimento no glossário."
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
            name: "50px",
            code: "50px"
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
            name: "-4px",
            code: "-4px"
        },
        {
            name: "2cm",
            code: "2cm"
        },
        {
            name: "4cm",
            code: "4cm"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}