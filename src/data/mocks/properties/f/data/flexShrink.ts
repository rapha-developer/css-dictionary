import { PropertyProps } from "../../../../../types/PropertyProps";
import { genericPropertyExamplesData, genericPropertyValuesData } from "../../../GenericPropertyAtributes";

export const flexShrinkData: PropertyProps = {
    name: "flex shrink",
    definition: "A propriedade flex-shrink especifica como o item encolherá em relação ao restante dos itens flexíveis dentro do mesmo contêiner. Se o elemento não for um item flexível, a propriedade flex-shrink não tem efeito.",
    category: "css property",
    values: [
        {
            name: "number",
            value: "Um número que especifica o quanto o item encolherá em relação ao restante dos itens flexíveis. O valor padrão é 1"
        },
        genericPropertyValuesData.initial,
        genericPropertyValuesData.inherit
    ],
    examples: [
        {
            name: "shrink: 0",
            code: "0"
        },
        {
            name: "shrink: 1",
            code: "1"
        },
        {
            name: "shrink: 2",
            code: "2"
        },
        {
            name: "shrink: 3",
            code: "3"
        },
        {
            name: "shrink: 4",
            code: "4"
        },
        genericPropertyExamplesData.initial,
        genericPropertyExamplesData.inherit
    ]
}