import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexDirectionData: PropertyProps = {
    name: "flex direction",
    definition: "A propriedade flex-direction especifica a direção dos itens flexíveis. Se o elemento não for um item flexível, a propriedade flex-direction não tem efeito.",
    category: "css property",
    values: [
        {
            name: "row",
            value: "Valor padrão. Os itens flexíveis são exibidos horizontalmente, como uma linha (row)"
        },
        {
            name: "row-reverse",
            value: "O mesmo que linha (row), mas na ordem inversa"
        },
        {
            name: "column",
            value: "Os itens flexíveis são exibidos verticalmente, como uma coluna (column)"
        },
        {
            name: "column-reverse",
            value: "O mesmo que coluna (column), mas na ordem inversa"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "row",
            code: "row"
        },
        {
            name: "row-reverse",
            code: "row-reverse"
        },
        {
            name: "column",
            code: "column"
        },
        {
            name: "column-reverse",
            code: "column-reverse"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}