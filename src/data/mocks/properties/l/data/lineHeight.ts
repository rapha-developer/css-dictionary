import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const lineHeightData: PropertyProps = {
    name: "line height",
    definition: "A propriedade line-height especifica a altura de uma linha. Nota: Valores negativos não são permitidos.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Uma altura de linha normal. Este é o padrão"
        },
        {
            name: "number",
            value: "Um número que será multiplicado pelo tamanho da fonte atual para definir a altura da linha"
        },
        {
            name: "length",
            value: "Uma altura de linha fixa em px, pt, cm, etc."
        },
        {
            name: "%",
            value: "Uma altura de linha em porcentagem do tamanho da fonte atual"
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
            name: "1",
            code: "1"
        },
        {
            name: "1.6",
            code: "1.6"
        },
        {
            name: "2",
            code: "2"
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
            name: "80%",
            code: "80%"
        },
        {
            name: "120%",
            code: "120%"
        },
        {
            name: "150%",
            code: "150%"
        },
        {
            name: "200%",
            code: "200%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}