import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const columnCountData: PropertyProps = {
    name: "column count",
    definition: "A propriedade column-count especifica o número de colunas em que um elemento deve ser dividido.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "O número ideal de colunas nas quais o conteúdo do elemento será fluindo"
        },
        {
            name: "auto",
            value: "Valor padrão. O número de colunas será determinado por outras propriedades, como por exemplo 'column-width'"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "1",
            code: "1"
        },
        {
            name: "2",
            code: "2"
        },
        {
            name: "3",
            code: "3"
        },
        {
            name: "auto",
            code: "auto"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}
