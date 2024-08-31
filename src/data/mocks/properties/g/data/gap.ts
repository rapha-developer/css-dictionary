import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const gapData: PropertyProps = {
    name: "gap",
    definition: "A propriedade gap define o tamanho do gap entre as linhas e entre as colunas no flexbox, grid ou layout multicoluna. É uma abreviação para as seguintes propriedades: row-gap & column-gap.",
    category: "css property",
    values: [
        {
            name: "row-gap",
            value: "Define o tamanho do espaço entre as linhas em um layout de grade ou flexbox"
        },
        {
            name: "column-gap",
            value: "Define o tamanho do espaço entre as colunas em um layout de grade, flexbox ou multicoluna"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "15px",
            code: "15px"
        },
        {
            name: "30px",
            code: "30px"
        },
        {
            name: "30px 15px",
            code: "30px 15px"
        },
        {
            name: "15px 30px",
            code: "15px 30px"
        },
        {
            name: "20%",
            code: "20%"
        },
        {
            name: "0",
            code: "0"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}