import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const textUnderlineOffsetData: PropertyProps = {
    name: "text underline offset",
    definition: "A propriedade text-underline-offset especifica a distância de deslocamento das decorações de texto sublinhado.",
    category: "css property",
    values: [
        {
            name: "auto",
            value: "Valor padrão. O navegador define o deslocamento apropriado para o sublinhado"
        },
        {
            name: "length",
            value: "Especifica o deslocamento como um valor de comprimento"
        },
        {
            name: "percentage",
            value: "Especifica o deslocamento como um valor percentual"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "auto",
            code: "auto"
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
            name: "1em",
            code: "1em"
        },
        {
            name: "1.5em",
            code: "1.5em"
        },
        {
            name: "25%",
            code: "25%"
        },
        {
            name: "50%",
            code: "50%"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}