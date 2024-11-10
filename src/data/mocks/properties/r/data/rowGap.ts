import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const rowGapData: PropertyProps = {
    name: "row gap",
    definition: "A propriedade row-gap especifica o espaço entre as linhas em um flexbox ou layout de grade.",
    category: "css property",
    values: [
        {
            name: "length",
            value: "Um comprimento especificado ou % que definirá o espaço entre as linhas"
        },
        {
            name: "normal",
            value: "Valor padrão. Especifica um espaço normal entre as linhas"
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
            name: "30px",
            code: "30px"
        },
        {
            name: "100px",
            code: "100px"
        },
        {
            name: "normal",
            code: "normal"
        },
        {
            name: "10%",
            code: "10%"
        },
        {
            name: "20%",
            code: "20%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}