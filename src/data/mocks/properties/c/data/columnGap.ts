import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnGapData: PropertyProps = {
    name: "column gap",
    definition: "A propriedade column-gap especifica o espaço entre as colunas no layout de grade, flexbox ou multicolunas. Se existir um column-rule, ele aparecerá entre as colunas.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Um comprimento especificado que definirá o espaço entre as colunas"
        },
        {
            name: "normal",
            value: "Valor padrão. Especifica um espaço normal entre as colunas."
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
            name: "30px",
            code: "30px"
        },
        {
            name: "70px",
            code: "70px"
        },
        {
            name: "normal",
            code: "normal"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
