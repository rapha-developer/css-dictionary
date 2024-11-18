import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textDecorationThicknessData: PropertyProps = {
    name: "text decoration thickness",
    definition: "A propriedade text-decoration-thickness especifica a espessura da linha de decoração.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "O navegador escolhe a espessura da linha de decoração"
        },
        {
            name: "from-font",
            value: "Se um arquivo de fonte contiver informações sobre uma espessura preferida, use esse valor. Se não, comporte-se como auto"
        },
        {
            name: "length/percentage",
            value: "Especifica a espessura como comprimento ou %"
        },
        genericPropertyValuesData.initial
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
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
            name: "25%",
            code: "25%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial
    ]
}