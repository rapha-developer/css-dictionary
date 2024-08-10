import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnSpanData: PropertyProps = {
    name: "column span",
    definition: "A propriedade column-span especifica quantas colunas um elemento deve abranger.",
    category: "css property",
    values: [
        {
            name: "none",
            value: "Valor padrão. O elemento deve abranger uma coluna"
        },
        {
            name: "all",
            value: "O elemento deve abranger todas as colunas"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "none",
            code: "none"
        },
        {
            name: "all",
            code: "all"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
