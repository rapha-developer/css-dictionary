import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const fontWeightData: PropertyProps = {
    name: "font weight",
    definition: "A propriedade font-weight define a espessura dos caracteres no texto que devem ser exibidos.",
    category: "css property",
    values: [
        {
            name: "normal",
            value: "Define caracteres normais. Este é o padrão"
        },
        {
            name: "bold",
            value: "Define caracteres grossos (thick)"
        },
        {
            name: "bolder",
            value: "Define caracteres mais grossos (thicker)"
        },
        {
            name: "number",
            value: "Define de caracteres finos a grossos. 400 é o mesmo que normal e 700 é o mesmo que negrito (bold). Valores permitidos: 100, 200, 300, 400, 500, 600, 700, 800 e 900."
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
            name: "bold",
            code: "bold"
        },
        {
            name: "200",
            code: "200"
        },
        {
            name: "400",
            code: "400"
        },
        {
            name: "500",
            code: "500"
        },
        {
            name: "700",
            code: "700"
        },
        {
            name: "800",
            code: "800"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}